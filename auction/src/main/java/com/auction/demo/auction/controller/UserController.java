package com.auction.demo.auction.controller;


import com.auction.demo.auction.domain.User;
import com.auction.demo.auction.dto.UserDTO;
import com.auction.demo.auction.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public ResponseEntity<?> insertUser(@RequestBody UserDTO userDTO) {
        userService.insert(userDTO);
        return new ResponseEntity<>( HttpStatus.OK);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id,@RequestBody UserDTO userDTO) {
       userService.edit(id, userDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<?> getAllClassroom() {
        List<User> users = userService.getAll();
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getoneuser(@PathVariable Long id) {
        User user = userService.getOne(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
}
