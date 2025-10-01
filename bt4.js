// 1. Khai báo biến chuỗi
let strNumber = "42";

// In kiểu dữ liệu ban đầu
console.log("Kiểu dữ liệu ban đầu của strNumber:", typeof strNumber);
// Kết quả: "string"

// 2. Chuyển đổi thành số và thực hiện phép cộng
let numberValue = Number(strNumber); // Chuyển đổi chuỗi "42" thành số 42

let result = numberValue + 8; // Thực hiện phép cộng: 42 + 8 = 50

// In kết quả
console.log("Kết quả sau khi chuyển đổi và cộng với 8:", result);
// Kết quả: 50

// 3. Kiểm tra kiểu dữ liệu sau chuyển đổi
console.log("Kiểu dữ liệu của numberValue sau chuyển đổi:", typeof numberValue);
// Kết quả: "number"