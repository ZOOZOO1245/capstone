package com.kbeauty.shop.controller;

import com.kbeauty.shop.model.CartItem;
import com.kbeauty.shop.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
    
    private final CartService cartService;
    
    @PostMapping("/add")
    public ResponseEntity<CartItem> addToCart(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody CartItem cartItem) {
        CartItem savedItem = cartService.addToCart(userId, cartItem);
        return ResponseEntity.ok(savedItem);
    }
    
    @GetMapping
    public ResponseEntity<List<CartItem>> getCart(@RequestHeader("X-User-Id") Long userId) {
        List<CartItem> cartItems = cartService.getCartItems(userId);
        return ResponseEntity.ok(cartItems);
    }
    
    @PutMapping("/{cartItemId}/quantity")
    public ResponseEntity<Void> updateQuantity(
            @PathVariable Long cartItemId,
            @RequestParam int quantity) {
        cartService.updateQuantity(cartItemId, quantity);
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<Void> removeFromCart(@PathVariable Long cartItemId) {
        cartService.removeFromCart(cartItemId);
        return ResponseEntity.ok().build();
    }
} 