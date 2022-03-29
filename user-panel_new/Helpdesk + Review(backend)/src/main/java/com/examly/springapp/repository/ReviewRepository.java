package com.examly.springapp.repository;

import com.examly.springapp.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository <Review,Integer>{
    Review findByName(String name);


}
