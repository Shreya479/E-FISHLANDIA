package com.review.reviewsystem.service;

import com.review.reviewsystem.model.Review;

import java.util.List;

public interface ReviewService {
    public Review saveStudent(Review student);
    public List<Review> getAllStudents();
}
