package com.example.demo.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.repository.productRepository;
import com.example.demo.model.productModel;

@Service
public class productService {
    @Autowired
    private productRepository productRepo;


    public List<productModel> getAllProduct()
    {
        return productRepo.findAll();
    }
    public productModel getProductById(long id){
        return productRepo.findById(id).orElse(null);
    }
    public productModel getProductByName(String name){
        return productRepo.findByName(name);
    }




}