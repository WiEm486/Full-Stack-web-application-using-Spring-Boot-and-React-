package com.example.test.service;
import com.example.test.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    List<Student> getAllStudents();
}
