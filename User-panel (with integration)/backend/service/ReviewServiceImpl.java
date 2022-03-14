package com.review.reviewsystem.service;

import com.review.reviewsystem.model.Review;
import com.review.reviewsystem.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository ReviewRepository;

    @Override
    public Review saveStudent(Review student) {
        return ReviewRepository.save(student);
    }

    @Override
    public List<Review> getAllStudents() {
        return ReviewRepository.findAll();
    }
}
