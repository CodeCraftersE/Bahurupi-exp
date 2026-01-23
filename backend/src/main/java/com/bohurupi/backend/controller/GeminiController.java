package com.bohurupi.backend.controller;

import com.bohurupi.backend.service.GeminiService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/gemini")
@CrossOrigin(origins = "*")
public class GeminiController {

    private final GeminiService geminiService;

    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("/generate")
    public Mono<ResponseEntity<Object>> generate(@RequestBody Object promptRequest) {
        return geminiService.generateContent(promptRequest)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(500).body(e.getMessage())));
    }
}
