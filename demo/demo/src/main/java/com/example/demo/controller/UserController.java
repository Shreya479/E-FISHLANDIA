package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;
import com.example.demo.repository.UserRepository;
@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @Autowired
    private UserRepository userRepo;

    @GetMapping("/listUsers")
    public List<UserModel> Users() {
        List<UserModel> users = userService.getAllUser();
        return users;
    }

    @GetMapping("/User/{id}")
    public UserModel findUserID(@PathVariable long id){
        return userService.getUserById(id);
    }

    @GetMapping("/UserCount")
    public long UserCount() {
        return userRepo.count();

    }
}