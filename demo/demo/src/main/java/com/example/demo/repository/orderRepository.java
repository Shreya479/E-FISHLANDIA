package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.model.orderModel;

@Repository
public interface orderRepository extends JpaRepository<orderModel, Long> {
    public orderModel findByName(String name);
    @Query(value = "SELECT sum(price) FROM orderModel")
    public double sumPrice();

    @Query(value = "SELECT count(id) FROM orderModel where status='Completed' or status='completed'")
    public int orderCompletedCount();
}
