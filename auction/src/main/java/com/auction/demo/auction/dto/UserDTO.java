package com.auction.demo.auction.dto;

import com.auction.demo.auction.domain.User;

public class UserDTO {
    private Long id;
    private String username;

    public UserDTO() {
    }

    public UserDTO(Long id, String username) {
        this.id = id;
        this.username = username;
    }

    public UserDTO(User user){
        this(user.getId(),user.getUsername());
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", username='" + username + '\'' +
                '}';
    }
}
