package com.example.elschool;
import com.example.elschool.model.Student;
import com.example.elschool.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ElschoolApplication {

	public static void main(String[] args) {

		SpringApplication.run(ElschoolApplication.class, args);
	}

	@Autowired
	private StudentServiceImpl studentService;

	@Bean
	CommandLineRunner runner() {
		return args -> {
			studentService.saveStudent(new Student("Student1","Student1","student1@gmail.com","group-1","87771111111"));
			studentService.saveStudent(new Student("Student2","Student2","student2@gmail.com","group-2","87772222222"));
			studentService.saveStudent(new Student("Student3","Student3","student3@gmail.com","group-3","87773333333"));
		};
	}

}
