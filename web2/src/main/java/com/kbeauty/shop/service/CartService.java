package com.kbeauty.shop.service;

import com.kbeauty.shop.model.CartItem;
import com.kbeauty.shop.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
    
    private final CartRepository cartRepository;
    
    @Transactional
    public CartItem addToCart(Long userId, CartItem cartItem) {
        CartItem existingItem = cartRepository.findByUserIdAndProductId(userId, cartItem.getProductId());
        
        if (existingItem != null) {
            // 이미 장바구니에 있는 경우 수량만 증가
            existingItem.setQuantity(existingItem.getQuantity() + cartItem.getQuantity());
            return cartRepository.save(existingItem);
        } else {
            // 새로운 아이템 추가
            cartItem.setCreatedAt(LocalDateTime.now());
            return cartRepository.save(cartItem);
        }
    }
    
    public List<CartItem> getCartItems(Long userId) {
        return cartRepository.findByUserId(userId);
    }
    
    @Transactional
    public void updateQuantity(Long cartItemId, int quantity) {
        CartItem cartItem = cartRepository.findById(cartItemId)
            .orElseThrow(() -> new RuntimeException("장바구니 아이템을 찾을 수 없습니다."));
        cartItem.setQuantity(quantity);
        cartRepository.save(cartItem);
    }
    
    @Transactional
    public void removeFromCart(Long cartItemId) {
        cartRepository.deleteById(cartItemId);
    }
} 