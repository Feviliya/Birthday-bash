package com.example.birthday.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.birthday.Entity.UserDetails;

public interface UserDetailsRepo extends JpaRepository<UserDetails, Integer>{

}
