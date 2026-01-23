
import { UserPreferences, Itinerary } from '../types';

/**
 * BOHURUPI AI SERVICE
 * Now securely proxied through the Java Spring Boot Backend.
 */

const BACKEND_URL = "http://localhost:8080/api/gemini/generate";

/**
 * Generates a structured itinerary using the secure Java backend
 */
export const generateItinerary = async (region: string, prefs: UserPreferences, duration: number, isCustomSearch: boolean = false): Promise<Itinerary> => {
  const locationContext = isCustomSearch ? `the specific place: ${region}` : `the region: ${region}`;

  const prompt = `
    You are 'The Bohurupi', a professional and poetic Bengal Tour Guide with deep knowledge of West Bengal's history and culture.
    Create a highly detailed ${duration}-day travel itinerary for ${locationContext}.
    
    TRAVELER PROFILE:
    - Members: ${prefs.members}
    - Budget Tier: ${prefs.budget}
    - Travel Pace: ${prefs.pace}
    - Interests: ${prefs.interests.join(', ')}
    - Travel Month: ${prefs.month}
    
    RESPONSE REQUIREMENTS:
    1. Output MUST be valid JSON according to the schema.
    2. Be poetic but practical.
    3. Include cultural tips and local secrets.
    4. Provide a realistic budget breakdown.
  `;

  // Payload for the Gemini 2.0 Flash model
  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "The storyteller is resting.");
    }

    const data = await response.json();
    // Gemini response structure: data.candidates[0].content.parts[0].text
    const jsonStr = data.candidates[0].content.parts[0].text;

    return JSON.parse(jsonStr);
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    throw new Error(`The storyteller is resting. Error: ${error.message}`);
  }
};

/**
 * Conversations with the Guide about a specific itinerary
 */
export const askItineraryQuestion = async (itinerary: Itinerary, question: string, onChunk: (text: string) => void) => {
  const prompt = `You are 'The Bohurupi'. You just planned this trip: "${itinerary.title}" for ${itinerary.bestSeason}. Question: ${question}`;

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }]
  };

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      onChunk(`\n\n*The Guide is lost in thought. Error: ${errorText}*`);
      return;
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    onChunk(text);
  } catch (error: any) {
    console.error("Chat Error:", error);
    onChunk(`\n\n*The Guide is lost in thought. Error: ${error.message}*`);
  }
};
