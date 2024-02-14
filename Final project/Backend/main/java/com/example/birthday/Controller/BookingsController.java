package com.example.birthday.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.birthday.Entity.Bookings;
import com.example.birthday.Repository.BookingsRepo;
import com.example.birthday.Service.BookingService;
import com.example.birthday.dto.BookingResponse;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class BookingsController {
    @Autowired
    private BookingService bookServ;
    @Autowired
    private BookingsRepo bookRepo;
    @Tag(name = "Add booking", description = "To add booking")
    @PostMapping("/addBooking")
    public String addBookings(@RequestBody Bookings b) {
        bookRepo.save(b);
        return "Booking done for user: "+b.getUserid()+ " with booking id: "+b.getBooking_id();
    }
    @Tag(name = "Get user booking", description = "To view individual booking")
    @GetMapping("/getbookingsadmin/{id}")
    public ResponseEntity<BookingResponse> getBookingAdmin(@PathVariable("id") int id){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(bookServ.getBooking(id));
    }
    @Tag(name = "Get bookings", description = "To view all the bookings")
    @GetMapping("/getBookings")
    public List<Bookings> getBookings() {
        return bookRepo.findAll();
    }
    @Tag(name = "Get bookings", description = "To view individual booking")
    @GetMapping("/getbookings/{userid}")
    public List<Bookings> getBookings(@PathVariable("userid") int userid){
        return bookRepo.findAllByUserid(userid);
    }

    @Tag(name = "Get bookings", description = "To view individual booking")
    @GetMapping("/getbooking/{userid}")
    public Optional<Bookings> getBooking(@PathVariable("userid") int userid){
        return bookRepo.findByUserid(userid);
    }
    @Tag(name = "Delete bookings", description = "To delete individual booking")
    @DeleteMapping("/deleteBooking/{userid}")
    public String deleteBook(@PathVariable("userid") int bookid){
        bookRepo.deleteById(bookid);
        return "Deleted"+bookid;
    }
}   
