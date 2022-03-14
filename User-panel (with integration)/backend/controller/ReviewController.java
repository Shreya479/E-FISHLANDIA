package com.review.reviewsystem.controller;

import com.review.reviewsystem.model.Review;
import com.review.reviewsystem.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/review")  //class level get request
@CrossOrigin
public class ReviewController {
    @Autowired
    private ReviewService ReviewService;

    @PostMapping("/add")
    public String add(@RequestBody Review Review){
        ReviewService.saveStudent(Review);
        return "New review is added";
    }

    @GetMapping("/getAll") //method level get request
    public List<Review> list(){
        return ReviewService.getAllStudents();
    }
}
