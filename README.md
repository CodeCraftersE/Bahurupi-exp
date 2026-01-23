
# Bohurupi Bangla 2.0 - Technical Architecture & Java Significance

## 🏛️ Architecture Overview
This project follows a professional **Full-Stack Decoupled Architecture**. 
- **Frontend:** React 19 + TypeScript + Tailwind CSS (The Interaction Layer)
- **Backend:** Java 17 + Spring Boot 3.x (The Intelligence & Security Layer)
- **AI Engine:** Google Gemini (The Reasoning Layer)

## ☕ Why Java? (The Significance)

For a **Final Year Engineering Project**, using Java Spring Boot elevates the application from a "simple website" to an "Enterprise-Grade System." 

### 1. Robust Security (Full API Masking)
Directly calling AI APIs from the browser exposes your private API Keys. In this project, **all AI requests (including the Chatbot)** are proxied through Java. This ensures that the Gemini API key and the "System Instructions" are never visible to the end-user.

### 2. Java-Powered Chatbot Integration
Unlike basic projects that use client-side scripts, our **Chatbot is integrated via the Java Backend**. The `/api/chat` endpoint handles the context of the user's trip and constructs a secure prompt on the server-side before calling Gemini.

### 3. Scalable REST API Design
The `ItineraryController.java` implements standardized RESTful endpoints. Java's **Strong Typing** system ensures that the data flow between the AI and the user is predictable and enterprise-ready.

### 4. Separation of Concerns
Following the **MVC (Model-View-Controller)** pattern, Java handles the complex business logic, while React focus exclusively on providing a high-end **User Experience (UX)**.

---
*This architecture demonstrates a complete Full-Stack lifecycle, moving from a static view to a dynamic, AI-orchestrated system.*
