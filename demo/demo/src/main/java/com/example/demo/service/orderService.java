package com.example.demo.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.repository.orderRepository;
import com.example.demo.model.orderModel;

@Service
public class orderService {
    @Autowired
    private orderRepository orderRepo;


    public List<orderModel> getAllOrder()
    {
        return orderRepo.findAll();
    }
    public orderModel getOrderById(long id){
        return orderRepo.findById(id).orElse(null);
    }
    public orderModel getOrderByName(String name){
        return orderRepo.findByName(name);
    }
    public void deleteOrder(long id){
        orderRepo.deleteById(id);

    }




}