package com.example.birthday.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.birthday.Entity.Bookings;

public interface BookingsRepo extends JpaRepository<Bookings, Integer>{
    

}
 