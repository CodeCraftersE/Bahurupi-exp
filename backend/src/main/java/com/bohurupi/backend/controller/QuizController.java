package com.bohurupi.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Controller for the Mastery Quiz.
 * Handles question fetching and answer validation.
 */
@RestController
@RequestMapping("/api/master-quiz")
@CrossOrigin(origins = "*")
public class QuizController {

    private static final Map<String, Integer> ANSWER_KEY = new HashMap<>();
    private static final Map<String, String> FACTOIDS = new HashMap<>();
    private static final List<Map<String, Object>> QUESTIONS = new ArrayList<>();
    public static final int NAWAB_THRESHOLD = 1500;

    static {
        addQuestion("mq1",
                "Which Bengal town is famously associated with the term 'French Riviera of the East'?",
                Arrays.asList("Kolkata", "Chandannagar", "Bandel", "Digha"), 1,
                "Chandannagar was a French colony until 1950, and its 'Strand' riverside is often compared to French promenades.",
                "Medium");

        addQuestion("mq2",
                "The 'Baluchari' saree, known for its intricate depictions of mythological scenes, originated in which district?",
                Arrays.asList("Bankura", "Murshidabad", "Nadia", "Hooghly"), 1,
                "While Bankura (Bishnupur) is the current hub, Baluchari originally originated in Baluchar village in Murshidabad.",
                "Expert");

        addQuestion("mq3", "Which of these is the literal meaning of 'Kolkata'?",
                Arrays.asList("The land of Kali", "The field of lime (Chuna)", "Place of the goddess",
                        "The delta mouth"),
                1,
                "It is believed to be derived from 'Kolikata', which likely stems from 'Khal' (canal) and 'Katta' (dug), or linked to the word for lime (Kalikata).",
                "Expert");

        addQuestion("mq5", "Which Nobel Laureate from Bengal founded the 'Visva-Bharati' University?",
                Arrays.asList("Amartya Sen", "Rabindranath Tagore", "Mother Teresa",
                        "Abhijit Banerjee"),
                1,
                "Rabindranath Tagore founded Visva-Bharati in Santiniketan as an experimental school in 1901.",
                "Easy");

        addQuestion("mq6", "What is the traditional art of floor painting in Bengal called?",
                Arrays.asList("Rangoli", "Alpona", "Madhubani", "Pattachitra"), 1,
                "Alpona is the traditional folk art of Bengal, usually made during festivals like Lakshmi Puja.",
                "Easy");

        addQuestion("mq7",
                "Which iconic bridge in Kolkata is a 'Cantilever' bridge with no pillars in the river bed?",
                Arrays.asList("Vidyasagar Setu", "Howrah Bridge", "Vivekananda Setu", "Bally Bridge"),
                1,
                "Howrah Bridge is one of the busiest cantilever bridges in the world, connecting Kolkata and Howrah.",
                "Medium");

        addQuestion("mq8", "The Sundarbans, the world's largest mangrove forest, is named after which tree?",
                Arrays.asList("Sal", "Sundari", "Teak", "Banyan"), 1,
                "Sundari (Heritiera fomes) trees provide the forest its name and are vital to its ecosystem.",
                "Easy");

        addQuestion("mq9",
                "Which district in West Bengal is world-famous for its 'Fazli' and 'Himsagar' mangoes?",
                Arrays.asList("Malda", "Murshidabad", "Nadia", "Birbhum"), 0,
                "Malda is the mango capital of Bengal, exporting thousands of tons of high-quality mangoes annually.",
                "Easy");

        addQuestion("mq10", "The 'Baul' music of Bengal is recognized by UNESCO as part of what?",
                Arrays.asList("World Heritage Site", "Intangible Cultural Heritage",
                        "Memory of the World",
                        "Biosphere Reserve"),
                1,
                "Baul music is a unique folk tradition representing the spiritual and philosophical side of rural Bengal.",
                "Medium");

        addQuestion("mq11", "Which place is known as the 'Land of Red Soil' (Lal Matir Desh) in Bengal?",
                Arrays.asList("Darjeeling", "Birbhum", "Sundarbans", "Kolkata"), 1,
                "Birbhum's laterite soil gives it a distinct red appearance, famously celebrated in Santiniketan's culture.",
                "Medium");

        addQuestion("mq12", "Which Bengali scientist is known as the 'Father of Radio Science'?",
                Arrays.asList("Satyendra Nath Bose", "Jagadish Chandra Bose", "Prafulla Chandra Ray",
                        "Meghnad Saha"),
                1,
                "J.C. Bose pioneered the investigation of radio and microwave optics and was a polymath.",
                "Medium");

        addQuestion("mq13", "Which river is known as the 'Sorrow of Bengal' due to its frequent floods?",
                Arrays.asList("Hooghly", "Damodar", "Teesta", "Rupnarayan"), 1,
                "Historically, the Damodar River caused devastating floods, though dams have now controlled it.",
                "Easy");

        addQuestion("mq14", "Kolkata's Tram system, started in 1873, holds what distinction in Asia?",
                Arrays.asList("Fastest Trams", "Only operating Tram network",
                        "Oldest operating Tram network",
                        "Largest network"),
                2,
                "The Kolkata Tram is the oldest operating electric tram system in Asia and a symbol of heritage.",
                "Medium");

        addQuestion("mq15", "Which Bengali author wrote the national song 'Vande Mataram'?",
                Arrays.asList("Rabindranath Tagore", "Bankim Chandra Chattopadhyay",
                        "Michael Madhusudan Dutt",
                        "Sarat Chandra"),
                1,
                "Vande Mataram was first published in Bankim Chandra's novel 'Anandamath' in 1882.",
                "Easy");

        addQuestion("mq16", "Which city was the capital of British India until 1911?",
                Arrays.asList("Delhi", "Kolkata", "Mumbai", "Chennai"), 1,
                "Kolkata served as the center of British administration before the capital moved to New Delhi.",
                "Easy");

        addQuestion("mq17", "Which Bengal revolutionary is famously known as 'Bagha Jatin'?",
                Arrays.asList("Jatin Das", "Jatindranath Mukherjee", "Surya Sen", "Rash Behari Bose"),
                1,
                "He earned the name after killing a tiger with a dhal (dagger) single-handedly.",
                "Expert");

        addQuestion("mq18", "The 'Chhau' dance of Purulia is characterized by the use of what?",
                Arrays.asList("Large Masks", "Long Sticks", "Fire", "Puppets"), 0,
                "Purulia Chhau is a vibrant martial folk dance where performers wear elaborate handcrafted masks.",
                "Medium");

        addQuestion("mq19", "Which place is the birthplace of Chaitanya Mahaprabhu?",
                Arrays.asList("Mayapur", "Nabadwip", "Tarapith", "Dakshineswar"), 1,
                "Nabadwip is a sacred town and the 15th-century birthplace of the Vaishnava saint.",
                "Medium");

        addQuestion("mq20", "The 'Victoria Memorial' was built using marble from which place?",
                Arrays.asList("Italy", "Makrana, Rajasthan", "Jabalpur", "Portugal"), 1,
                "It was built with the same white Makrana marble used for the Taj Mahal.", "Medium");

        addQuestion("mq21", "Which forest in North Bengal is famous for the 'Red Panda'?",
                Arrays.asList("Gorumara", "Jaldapara", "Singalila National Park", "Buxa Tiger Reserve"),
                2,
                "Singalila is the highest national park in Bengal and a habitat for the rare Red Panda.",
                "Expert");
    }

    private static void addQuestion(String id, String text, List<String> options, int correctIndex, String factoid,
            String difficulty) {
        Map<String, Object> q = new HashMap<>();
        q.put("id", id);
        q.put("question", text);
        q.put("options", options);
        q.put("difficulty", difficulty);
        QUESTIONS.add(q);
        ANSWER_KEY.put(id, correctIndex);
        FACTOIDS.put(id, factoid);
    }

    @GetMapping("/random")
    public ResponseEntity<Map<String, Object>> getRandomQuestion(
            @RequestParam(required = false) List<String> excludeIds) {
        if (QUESTIONS.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        List<Map<String, Object>> availableQuestions = QUESTIONS;
        if (excludeIds != null && !excludeIds.isEmpty()) {
            availableQuestions = QUESTIONS.stream()
                    .filter(q -> !excludeIds.contains((String) q.get("id")))
                    .collect(Collectors.toList());
        }

        if (availableQuestions.isEmpty()) {
            int index = new Random().nextInt(QUESTIONS.size());
            return ResponseEntity.ok(QUESTIONS.get(index));
        }

        int index = new Random().nextInt(availableQuestions.size());
        return ResponseEntity.ok(availableQuestions.get(index));
    }

    @PostMapping("/validate")
    public ResponseEntity<Map<String, Object>> validateAnswer(@RequestBody Map<String, Object> payload) {
        String qId = (String) payload.get("questionId");
        Integer userChoice = (Integer) payload.get("answerIndex");

        Integer correctChoice = ANSWER_KEY.getOrDefault(qId, -1);
        boolean isCorrect = userChoice != null && userChoice.equals(correctChoice);

        Map<String, Object> response = new HashMap<>();
        response.put("correct", isCorrect);
        response.put("factoid", FACTOIDS.getOrDefault(qId, "Bengal's history is full of surprises!"));
        response.put("pointsEarned", isCorrect ? 100 : 0);

        return ResponseEntity.ok(response);
    }
}
