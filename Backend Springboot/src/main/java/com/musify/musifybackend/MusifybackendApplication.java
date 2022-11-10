package com.musify.musifybackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication

public class MusifybackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusifybackendApplication.class, args);
		System.out.print("Running...");
	}

}
