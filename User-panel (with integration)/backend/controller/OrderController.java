package com.examly.springapp.controller;

import org.springframework.ui.Model;
import com.examly.springapp.model.OrderModel;
import com.examly.springapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.stereotype.Controller;

@CrossOrigin(origins = "*")
@RestController
public class OrderController {

@Autowired
private OrderService orderService;

//api
//add
@PostMapping("/addOrder")
public OrderModel addOrder(@RequestBody OrderModel order){
    return orderService.saveOrder(order);
}

@PostMapping("/addOrders")
public List<OrderModel> addOrders(@RequestBody List<OrderModel> orders){
    return orderService.saveOrders(orders);
}

//view
@GetMapping("/order/{id}")
public OrderModel findOrderByID(@PathVariable int id){
    return orderService.getOrderById(id);
}

@GetMapping("/orders")
public List<OrderModel> findAllOrders(){
    return orderService.getOrders();
}

//delete
@DeleteMapping("/deleteOrder/{id}")
public String deleteOrder(@PathVariable int id){
    orderService.deleteOrder(id);
    return "Order Removed";
}

@DeleteMapping("/multideleteOrder")
public String deleteSomeOrder(@RequestBody List<Integer> ids){
for(int id : ids){
    orderService.deleteOrder(id);
}
    return "Orders Removed";
}

//update
@PutMapping("/updateOrder")
    public OrderModel updateOrder(@RequestBody OrderModel order) {
        return orderService.updateOrder(order);
    }

}
