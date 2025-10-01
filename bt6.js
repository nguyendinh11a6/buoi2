// Khai báo nhiều biến cùng lúc
let productName = "Tai nghe Bluetooth",
    price = 500000,
    quantity = 2;

const DISCOUNT_RATE = 0.1; // 10% giảm giá

// Tính tổng giá sau khi giảm giá
let totalPrice = price * quantity * (1 - DISCOUNT_RATE);

// In ra kết quả
console.log("Sản phẩm: " + productName + ", Số lượng: " + quantity + ", Tổng giá: " + totalPrice + " VND");
