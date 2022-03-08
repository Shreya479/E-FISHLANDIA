package com.examly.springapp.controller;

import org.springframework.ui.Model;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.stereotype.Controller;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

@Autowired
private UserService userService;

//api
//add
@PostMapping("/addUser")
public UserModel addUser(@RequestBody UserModel user){
    return userService.saveUser(user);
}

@PostMapping("/addUsers")
public List<UserModel> addUsers(@RequestBody List<UserModel> users){
    return userService.saveUsers(users);
}

//view
@GetMapping("/user/{id}")
public UserModel findUserByID(@PathVariable int id){
    return userService.getUserById(id);
}

@GetMapping("/users")
public List<UserModel> findAllUsers(){
    return userService.getUsers();
}

//delete
@DeleteMapping("/deleteUser/{id}")
public String deleteUser(@PathVariable int id){
    userService.deleteUser(id);
    return "User Removed";
}

@DeleteMapping("/multideleteUser")
public String deleteSomeUser(@RequestBody List<Integer> ids){
for(int id : ids){
    userService.deleteUser(id);
}
    return "User Removed";
}

//update
@PutMapping("/updateUser")
    public UserModel updateUser(@RequestBody UserModel user) {
        return userService.updateUser(user);
    }

}
