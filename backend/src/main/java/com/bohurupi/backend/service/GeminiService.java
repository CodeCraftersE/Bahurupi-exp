package com.bohurupi.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.Map;

@Service
public class GeminiService {

    private final WebClient webClient;
    private final String apiKey;
    private final String apiUrl;

    public GeminiService(
            WebClient.Builder webClientBuilder,
            @Value("${gemini.api.key}") String apiKey,
            @Value("${gemini.api.url}") String apiUrl) {
        this.webClient = webClientBuilder.build();
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }

    public Mono<Object> generateContent(Object payload) {
        if (apiKey == null || apiKey.isEmpty()) {
            return Mono.error(new RuntimeException("GEMINI_API_KEY is not configured in the environment."));
        }

        return webClient.post()
                .uri(apiUrl + "?key=" + apiKey)
                .bodyValue(payload)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, response -> {
                    if (response.statusCode() == HttpStatus.FORBIDDEN) {
                        return Mono.error(new RuntimeException("Gemini API access forbidden: Check your API key."));
                    } else if (response.statusCode() == HttpStatus.TOO_MANY_REQUESTS) {
                        return Mono.error(new RuntimeException("Gemini API quota exceeded: Try again later."));
                    }
                    return response.bodyToMono(String.class)
                            .flatMap(errorBody -> Mono
                                    .error(new RuntimeException("Gemini API Client Error: " + errorBody)));
                })
                .onStatus(HttpStatusCode::is5xxServerError, response -> response.bodyToMono(String.class)
                        .flatMap(
                                errorBody -> Mono.error(new RuntimeException("Gemini API Server Error: " + errorBody))))
                .bodyToMono(Object.class)
                .timeout(Duration.ofMinutes(5));
    }
}
