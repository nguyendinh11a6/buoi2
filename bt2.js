// ----- Sử dụng var -----
console.log(hoistingTestVar); // Kết quả: undefined (biến được hoisting nhưng chưa gán giá trị)
var hoistingTestVar = 10;
console.log(hoistingTestVar); // Kết quả: 10

// ----- Sử dụng let -----
// console.log(hoistingTestLet); // ❌ Lỗi: Cannot access 'hoistingTestLet' before initialization
let hoistingTestLet = 20;
console.log(hoistingTestLet); // Kết quả: 20

// ----- Sử dụng const -----
// console.log(hoistingTestConst); // ❌ Lỗi: Cannot access 'hoistingTestConst' before initialization
const hoistingTestConst = 30;
console.log(hoistingTestConst); // Kết quả: 30
