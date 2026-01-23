package com.bohurupi.backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BohurupiBackendApplication {
    public static void main(String[] args) {
        // Load .env from project root (one level up from backend/ folder)
        Dotenv dotenv = Dotenv.configure()
                .directory("..")
                .load();

        dotenv.entries().forEach(entry -> {
            System.setProperty(entry.getKey(), entry.getValue());
        });

        SpringApplication.run(BohurupiBackendApplication.class, args);
    }
}
