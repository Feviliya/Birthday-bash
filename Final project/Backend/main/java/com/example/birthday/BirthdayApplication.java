package com.example.birthday;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Birthday Bash",
				version = "0.0.1",
				description = "A birthday event management system",
				contact = @Contact(
						name = "Feviliya J",
						email = "feviliya28@gmail.com"
						)
				)
		)

public class BirthdayApplication {

	public static void main(String[] args) {
		SpringApplication.run(BirthdayApplication.class, args);
	}

}
