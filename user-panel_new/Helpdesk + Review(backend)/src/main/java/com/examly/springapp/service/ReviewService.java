package com.examly.springapp.service;

import com.examly.springapp.model.Review;
import com.examly.springapp.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository repository;

    public Review saveReview(Review review) {
        return repository.save(review);
    }

    public List<Review> saveReviews(List<Review> review) {
        return repository.saveAll(review);
    }

    public List<Review> getReviews() {
        return repository.findAll();
    }

    public Review getReviewById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Review getReviewByName(String name) {
        return repository.findByName(name);
    }

    public String deleteReview(int id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

    public Review updateReview(Review product) {
        Review existingReview = repository.findById(product.getId()).orElse(null);
        existingReview.setName(product.getName());
        existingReview.setReview(product.getReview());
        existingReview.setRating(product.getRating());
        return repository.save(existingReview);
    }


}