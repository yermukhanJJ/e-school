package com.example.elschool.service;

import com.example.elschool.model.Student;
import com.example.elschool.mapper.StudentMapper;
import com.example.elschool.service.impl.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentMapper studentMapper;

    @Override
    public List<Student> getAllStudent() {
        List<Student> students = studentMapper.getAll();
        return students;
    }

    @Override
    public Student getStudent(Long id) {
        return studentMapper.getById(id);
    }

    @Override
    public void saveStudent(Student student) {
        studentMapper.saveStudent(student);
    }

    @Override
    public void deleteStudentById(Long id) {
        studentMapper.deleteStudentById(id);
    }

    @Override
    public void updateStudent(Long id, String firstname, String lastname, String email, String grouping, String number) {
        studentMapper.updateStudent(id, firstname, lastname, email, grouping, number);
    }
}
