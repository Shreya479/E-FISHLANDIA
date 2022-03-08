package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel,Integer> {
    //@Query("SELECT u FROM User u WHERE u.email = ?1")
    //public UserModel findByEmail(String email);

    //public UserModel findByResetPasswordToken(String token);
}