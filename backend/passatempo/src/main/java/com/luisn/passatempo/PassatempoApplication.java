package com.luisn.passatempo;

import com.luisn.passatempo.domain.Ator;
import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.repository.ClasseRepository;
import com.luisn.passatempo.repository.AtorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PassatempoApplication {

	public static void main(String[] args) {
		SpringApplication.run(PassatempoApplication.class, args);
	}

}
