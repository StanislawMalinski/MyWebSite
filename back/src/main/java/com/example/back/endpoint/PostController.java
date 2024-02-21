package com.example.back.endpoint;

import com.example.back.model.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    @GetMapping("/post{id}")
    public Post getPost(){
        return new Post("dupa");
    }
}
