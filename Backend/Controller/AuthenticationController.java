package com.example.birthday.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.birthday.Service.AuthenticationService;
import com.example.birthday.dto.AuthenticationRequest;
import com.example.birthday.dto.AuthenticationResponse;
import com.example.birthday.dto.RegisterRequest;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;
    
    @Tag(name = "Register new user", description = "To create a new account")
    @PostMapping("/register") 
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    @Tag(name = "Authenticate user", description = "To login to existing registered account")
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}