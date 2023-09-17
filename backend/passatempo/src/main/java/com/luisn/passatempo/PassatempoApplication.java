package com.luisn.passatempo;

import com.luisn.passatempo.domain.User;
import com.luisn.passatempo.repository.UserRepository;
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
	CommandLineRunner initDatabase(UserRepository userRepository) {
		return args -> {
			userRepository.deleteAll();
			User user = new User();
			user.setName("Luis");
			userRepository.save(user);
		};
	}
}
