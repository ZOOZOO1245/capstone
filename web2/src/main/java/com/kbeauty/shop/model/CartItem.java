package com.kbeauty.shop.model;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private String productId;
    private String productName;
    private int price;
    private int discount;
    private String image;
    private int quantity;
    private LocalDateTime createdAt;
} 