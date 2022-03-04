package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.orderModel;
import com.example.demo.service.orderService;
import com.example.demo.repository.orderRepository;
@CrossOrigin(origins = "*")
@RestController
public class orderController {

    @Autowired
    private orderService orderService;

    @Autowired
    private orderRepository orderRepo;

    @GetMapping("/listOrders")
    public List<orderModel> Orders() {
        List<orderModel> orders = orderService.getAllOrder();
        return orders;
    }

    @GetMapping("/Order/{id}")
    public orderModel findOrderID(@PathVariable long id){
        return orderService.getOrderById(id);
    }

    @GetMapping("/orderCount")
    public long OrderCount(){
        return orderRepo.count();
    }

    @GetMapping("/revenue")
    public double revenue(){
        return orderRepo.sumPrice();
    }

    @GetMapping("/orderCompleted")
    public int orderCompleted(){
        return orderRepo.orderCompletedCount();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteOrder(@PathVariable int id){
        orderService.deleteOrder(id);
        return "Order Removed";
    }

}
