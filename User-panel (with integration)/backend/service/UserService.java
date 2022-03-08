package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class UserService {

@Autowired
private UserRepository repository; 

//service methods
//add

public UserModel saveUser(UserModel user){
    return repository.save(user);
}
 
public List<UserModel> saveUsers(List<UserModel> users){
    return repository.saveAll(users);
}

//view
public UserModel getUserById(int id){
    return repository.findById(id).orElse(null);
}

public List<UserModel> getUsers(){
    return repository.findAll();
}

//delete
public void deleteUser(int id){
    repository.deleteById(id);
    
}

//update
public UserModel updateUser(UserModel user) {
    UserModel existingUser = repository.findById(user.getId()).orElse(null);
    existingUser.setName(user.getName());
    existingUser.setEmail(user.getEmail());
    existingUser.setPhoneNumber(user.getPhoneNumber());
    existingUser.setAddress(user.getAddress());
    existingUser.setStatus(user.getStatus());
    return repository.save(existingUser);
}

}







