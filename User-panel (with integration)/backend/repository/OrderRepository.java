package com.examly.springapp.repository;

import com.examly.springapp.model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.*;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel,Integer> {
    
    @Query(value = "SELECT sum(price) FROM OrderModel")
    public double sumPrice();

    @Query(value = "SELECT count(id) FROM OrderModel where status='Completed' or status='completed'")
    public int orderCompletedCount();
   
}