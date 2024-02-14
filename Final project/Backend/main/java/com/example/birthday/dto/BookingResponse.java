package com.example.birthday.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {
    private int booking_id;
    private String name;
    private int userid;
    private String package_name;
    private String venue;
    private String food;
    private int members;
    private String events;
}
