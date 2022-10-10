package com.example.elschool.controller;

import com.example.elschool.model.Student;
import com.example.elschool.service.StudentServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/students")
public class MainController {

    private final StudentServiceImpl studentService;

    public MainController(StudentServiceImpl studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAllStudent();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return studentService.getStudent(id);
    }

    @PostMapping
    public ResponseEntity createStudent(@RequestBody Student student) throws
            URISyntaxException {
        studentService.saveStudent(student);
        Student savedStudent = student;
        return ResponseEntity.created(new URI("/students/" + savedStudent.getId())).body(savedStudent);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateStudent(@PathVariable Long id,
                                        @RequestBody Student student) {
        studentService.updateStudent(id, student.getFirstname(), student.getLastname(), student.getEmail(),
                student.getGrouping(), student.getNumber());
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteStudent(@PathVariable Long id) {
        studentService.deleteStudentById(id);
        return ResponseEntity.ok().build();
    }
}
