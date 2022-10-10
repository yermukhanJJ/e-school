package com.example.elschool.mapper;

import com.example.elschool.model.Student;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper
public interface StudentMapper {

    List<Student> getAll();

    Student getById(Long id);

    @Options(useGeneratedKeys=true, keyProperty="id", keyColumn="id")
    void saveStudent(Student student);

    void deleteStudentById(Long id);

    void updateStudent(@Param("id") Long id, @Param("firstname") String firstname,
                              @Param("lastname") String lastname, @Param("email") String email,
                              @Param("grouping") String grouping, @Param("number") String number);
}
