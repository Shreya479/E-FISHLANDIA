package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.productModel;

@Repository
public interface productRepository extends JpaRepository<productModel, Long> {
    public productModel findByName(String name);
}