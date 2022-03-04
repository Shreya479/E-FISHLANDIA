package com.example.demo.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.repository.UserRepository;
import com.example.demo.model.UserModel;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;


    public List<UserModel> getAllUser()
    {
        return userRepo.findAll();
    }
    public UserModel getUserById(long id){
        return userRepo.findById(id).orElse(null);
    }
    public UserModel getUserByName(String name){
        return userRepo.findByName(name);
    }




}










