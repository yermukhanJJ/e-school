package com.example.elschool.service.impl;

import com.example.elschool.model.Student;
import java.util.List;

public interface StudentService {

    List<Student> getAllStudent();

    Student getStudent(Long id);

    void saveStudent(Student student);

    void deleteStudentById(Long id);

    void updateStudent(Long id, String firstname, String lastname, String email,
                              String grouping, String number);
}
