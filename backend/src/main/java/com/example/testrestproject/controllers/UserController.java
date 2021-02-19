package com.example.testrestproject.controllers;

import com.example.testrestproject.models.User;
import com.example.testrestproject.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.List;

import static org.graalvm.compiler.phases.common.DeadCodeEliminationPhase.Optionality.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @GetMapping("/user/{id}")
    public Optional<User> showUser(@PathVariable(value="id") long id) {
        Optional<User> res = userRepository.findById(id);
        return res;
    }

}
