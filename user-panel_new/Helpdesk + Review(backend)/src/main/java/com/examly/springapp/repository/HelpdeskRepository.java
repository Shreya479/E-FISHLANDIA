package com.examly.springapp.repository;

import com.examly.springapp.model.Helpdesk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelpdeskRepository extends JpaRepository <Helpdesk,Integer>{
    Helpdesk findByName(String name);


}
