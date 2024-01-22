package com.example.facts.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FactsController {

    @RequestMapping("/")
    public String getFact() {
        return "This is a random fact";
    }
}
