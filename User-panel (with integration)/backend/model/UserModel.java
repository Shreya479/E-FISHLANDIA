package com.examly.springapp.model;

import java.util.*;
import javax.persistence.Column;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name = "users")
public class UserModel{


    //tables

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="image")
    private String image;

    @Column(name="email") 
    private String email;

    @Column(name="phoneNumber")
    private Long phoneNumber;

    @Column(name="address") 
    private String address;


    @Column(name="status")
    private String status;


    //Constructor

    public UserModel(){}
    public UserModel(String name,String image,String email,Long phoneNumber,String address,String status){
        this.name = name;
        this.image=image;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.address = address;
        this.status=status;
    }
   

    //setter method
    
    public void setId(int id){
        this.id = id;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setImage(String image){
        this.image = image;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPhoneNumber(Long phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public void setStatus(String status){
        this.status = status;
    }


    //getter method
    
    public int getId(){
        return this.id;
    }

    public String getName(){
       return this.name;
    }

    public String getImage(){
        return this.image;
     }

    public String getEmail(){
        return this.email;
    }

    public Long getPhoneNumber(){
        return this.phoneNumber;
     }

    public String getAddress(){
       return this.address;
    }

    public String getStatus(){
        return this.status;
     }
   
}
