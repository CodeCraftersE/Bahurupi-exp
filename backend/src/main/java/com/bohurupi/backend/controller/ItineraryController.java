package com.bohurupi.backend.controller;

import com.bohurupi.backend.service.GeminiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.Map;

/**
 * Controller for handling itinerary generation and AI-chat related requests.
 * Uses GeminiService to securely communicate with the AI.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ItineraryController {

    private final GeminiService geminiService;

    public ItineraryController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("/itinerary")
    public Mono<ResponseEntity<Object>> generateItinerary(@RequestBody Map<String, Object> request) {
        return geminiService.generateContent(request)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(500).body(e.getMessage())));
    }

    @PostMapping("/chat")
    public Mono<ResponseEntity<Object>> askQuestion(@RequestBody Map<String, Object> request) {
        return geminiService.generateContent(request)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(500).body(e.getMessage())));
    }
}
