package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.productModel;
import com.example.demo.service.productService;

@CrossOrigin(origins = "*")
@RestController
public class productController {

    @Autowired
    private productService productService;

    @GetMapping("/listProducts")
    public List<productModel> Products() {
        List<productModel> products = productService.getAllProduct();
        return products;
    }

    @GetMapping("/Product/{id}")
    public productModel findProductID(@PathVariable long id){
        return productService.getProductById(id);
    }



}