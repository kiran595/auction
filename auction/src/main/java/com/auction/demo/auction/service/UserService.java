package com.auction.demo.auction.service;

import com.auction.demo.auction.domain.User;
import com.auction.demo.auction.dto.UserDTO;
import com.auction.demo.auction.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    public UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void insert(UserDTO userDTO){
        User user = new User();
        user.setUsername(userDTO.getUsername());
        userRepository.save(user);
    }

    public void delete(Long id){
        userRepository.delete(id);
    }

    public User getOne(Long id){
        return userRepository.findOne(id);
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public void edit(Long id, UserDTO userDTO){
        User user = userRepository.findOne(id);
        user.setUsername(userDTO.getUsername());
        userRepository.save(user);
    }

}
