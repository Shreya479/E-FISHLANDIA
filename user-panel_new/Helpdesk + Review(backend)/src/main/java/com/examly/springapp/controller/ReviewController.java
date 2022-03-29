package com.examly.springapp.controller;

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin
@RestController
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    private ReviewService service;

    @PostMapping("/addReview")
    public Review addReview(@RequestBody Review review) {
        return service.saveReview(review);
    }

    @PostMapping("/addReviews")
    public List<Review> addReviews(@RequestBody List<Review> reviews) {
        return service.saveReviews(reviews);
    }

    @GetMapping("/Reviews")
    public List<Review> findAllReviews() {
        return service.getReviews();
    }

    @GetMapping("/ReviewById/{id}")
    public Review findReviewById(@PathVariable int id) {
        return service.getReviewById(id);
    }

    @GetMapping("/Review/{name}")
    public Review findReviewByName(@PathVariable String name) {
        return service.getReviewByName(name);
    }

    @PutMapping("/update")
    public Review updateReview(@RequestBody Review Review) {
        return service.updateReview(Review);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteReview(@PathVariable int id) {
        return service.deleteReview(id);
    }

}
