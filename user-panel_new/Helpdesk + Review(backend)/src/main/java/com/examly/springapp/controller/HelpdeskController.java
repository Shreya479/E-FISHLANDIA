package com.examly.springapp.controller;

import com.examly.springapp.model.Helpdesk;
import com.examly.springapp.service.HelpdeskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin
@RestController
@RequestMapping("/helpdesk")
public class HelpdeskController {
    @Autowired
    private HelpdeskService service;

    @PostMapping("/addHelpdesk")
    public Helpdesk addHelpdesk(@RequestBody Helpdesk review) {
        return service.saveHelpdesk(review);
    }

    @PostMapping("/addHelpdesks")
    public List<Helpdesk> addHelpdesks(@RequestBody List<Helpdesk> reviews) {
        return service.saveHelpdesks(reviews);
    }

    @GetMapping("/Helpdesks")
    public List<Helpdesk> findAllHelpdesks() {
        return service.getHelpdesks();
    }

    @GetMapping("/HelpdeskById/{id}")
    public Helpdesk findHelpdeskById(@PathVariable int id) {
        return service.getHelpdeskById(id);
    }

    @GetMapping("/Helpdesk/{name}")
    public Helpdesk findHelpdeskByName(@PathVariable String name) {
        return service.getHelpdeskByName(name);
    }

    @PutMapping("/Helpdeskupdate")
    public Helpdesk updateHelpdesk(@RequestBody Helpdesk Review) {
        return service.updateHelpdesk(Review);
    }

    @DeleteMapping("/Helpdeskdelete/{id}")
    public String deleteHelpdesk(@PathVariable int id) {
        return service.deleteReview(id);
    }

}
