package com.examly.springapp.model;

import java.util.*;
import javax.persistence.Column;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.persistence.Id;

@Entity
@Table(name = "orders")
public class OrderModel{


    //tables

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private int id;

    @Column(name="customer_id")
    private int customer_id;

    @Column(name="name")
    private String name;

    @Column(name="date") 
    private String date;

    @Column(name="address")
    private String address;

    @Column(name="phoneNumber")
    private Long phoneNumber;

    @Column(name="shipping_id")
    private int shipping_id;

    @Column(name="quantity")
    private int quantity;

    @Column(name="price")
    private double price;

    @Column(name="status")
    private String status;


    //Constructor

    public OrderModel(){}
    public OrderModel(int customer_id,String name,String date,String address,Long phoneNumber,int shipping_id,int quantity,double price,String status){
        this.customer_id = customer_id;
        this.name = name;
        this.date=date;
        this.address = address;
        this.phoneNumber=phoneNumber;
        this.shipping_id = shipping_id;
        this.quantity = quantity;
        this.price=price;
        this.status=status;
    }
   

    //setter method
    
    public void setId(int id){
        this.id = id;
    }

    public void setCustomerId(int customer_id){
        this.customer_id = customer_id;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setDate(String date){
        this.date = date;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public void setPhoneNumber(Long phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public void setShippingId(int shipping_id){
        this.shipping_id = shipping_id;
    }

    public void setQuantity(int quantity){
        this.quantity = quantity;
    }

    public void setPrice(double price){
        this.price = price;
    }

    public void setStatus(String status){
        this.status = status;
    }


    //getter method
    
    public int getId(){
        return this.id;
    }

    public int getCustomerId(){
       return this.customer_id;
    }

    public String getName(){
       return this.name;
    }

    public String getDate(){
        return this.date;
    }

    public String getAddress(){
       return this.address;
    }

    public Long getPhoneNumber(){
        return this.phoneNumber;
     }

    public int getShippingId(){
       return this.shipping_id;
    }

    public int getQuantity(){
       return this.quantity;
    }

    public double getPrice(){
       return this.price;
    }

    public String getStatus(){
        return this.status;
     }
   
}




    