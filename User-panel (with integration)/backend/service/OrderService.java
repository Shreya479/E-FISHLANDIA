package com.examly.springapp.service;

import com.examly.springapp.model.OrderModel;
import com.examly.springapp.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class OrderService {

@Autowired
private OrderRepository repository; 

//service methods
//add

public OrderModel saveOrder(OrderModel order){
    return repository.save(order);
}
 
public List<OrderModel> saveOrders(List<OrderModel> orders){
    return repository.saveAll(orders);
}

//view
public OrderModel getOrderById(int id){
    return repository.findById(id).orElse(null);
}

public List<OrderModel> getOrders(){
    return repository.findAll();
}

//delete
public void deleteOrder(int id){
    repository.deleteById(id);
    
}

//update
public OrderModel updateOrder(OrderModel order) {
    OrderModel existingOrder = repository.findById(order.getId()).orElse(null);
    existingOrder.setStatus(order.getStatus());
    existingOrder.setShippingId(order.getShippingId());
    existingOrder.setPhoneNumber(order.getPhoneNumber());
    existingOrder.setAddress(order.getAddress());
    return repository.save(existingOrder);
}
 
}
