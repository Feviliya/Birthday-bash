package com.example.birthday.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "bookings")
public class Bookings {
    @Id
    @GeneratedValue
    private int booking_id;
    private String name;
    private int userid;
    private String package_name;
    private String venue;
    private String food;
    private int members;
    private String events;
}
