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

	@Bean
	CommandLineRunner initDatabase(AtorRepository atorRepository, ClasseRepository classeRepository) {
		return args -> {
			atorRepository.deleteAll();
			classeRepository.deleteAll();
			Ator ator = new Ator();
			ator.setName("aaaaaa");
			atorRepository.save(ator);
			Ator ator2 = new Ator();
			ator2.setName("bbbbbbb");
			atorRepository.save(ator2);
			Classe classe = new Classe();
			classe.setName("cccccc");
			classe.setValue("15");
			classe.setDate("15/09/2023");
			classeRepository.save(classe);
		};
	}
}
