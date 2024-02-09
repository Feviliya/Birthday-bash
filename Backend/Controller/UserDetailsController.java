package com.example.birthday.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.birthday.Entity.UserDetails;
import com.example.birthday.Repository.UserDetailsRepo;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class UserDetailsController {
    private final UserDetailsRepo userRepo;
    @Tag(name = "Add User Details", description = "To add details of registered user ")
    @PostMapping("/addUserDetails")
    public String addUser(@RequestBody UserDetails users){
        userRepo.save(users);
        return "User added";
    }
    @Tag(name = "Get User Details", description = "To view details of registered user ")
    @GetMapping("/getUsersDetails")
    public List<UserDetails> getUsers(){
        return userRepo.findAll();
    }
    @Tag(name = "Get User Details by id", description = "To view details of registered user individually")
    @GetMapping("/getUserDetail/{id}")
    public Optional<UserDetails> getUserDetail(@PathVariable("id")int id){
        return userRepo.findById(id);
    }
    @Tag(name = "Update User Details", description = "To update details of registered user ")
    @PutMapping("updateUserDetails/{id}")
    public String updateUser(@RequestBody UserDetails user) {
        userRepo.saveAndFlush(user);
        return "Updated";
    }
    @Tag(name = "Delete User Details", description = "To delete details of registered user ")
    @DeleteMapping("/deleteUserDetails/{id}")
    public String deleteUser(@PathVariable("id") int id){
        userRepo.deleteById(id);
        return "User deleted";
    }
}
