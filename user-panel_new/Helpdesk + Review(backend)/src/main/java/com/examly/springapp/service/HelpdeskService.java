package com.examly.springapp.service;

import com.examly.springapp.model.Helpdesk;
import com.examly.springapp.repository.HelpdeskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class HelpdeskService {
    @Autowired
    private HelpdeskRepository repository;

    public Helpdesk saveHelpdesk(Helpdesk review) {
        return repository.save(review);
    }

    public List<Helpdesk> saveHelpdesks(List<Helpdesk> review) {
        return repository.saveAll(review);
    }

    public List<Helpdesk> getHelpdesks() {
        return repository.findAll();
    }

    public Helpdesk getHelpdeskById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Helpdesk getHelpdeskByName(String name) {
        return repository.findByName(name);
    }

    public String deleteReview(int id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

    public Helpdesk updateHelpdesk(Helpdesk product) {
        Helpdesk existingHelpdesk = repository.findById(product.getId()).orElse(null);
        existingHelpdesk.setName(product.getName());
        existingHelpdesk.setUserid(product.getUserid());
        existingHelpdesk.setEmail(product.getEmail());
        return repository.save(existingHelpdesk);
    }


}