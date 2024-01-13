// Giá trị "truthy" đại diện cho các giá trị được xem là đúng. Trong JavaScript, các giá trị truthy bao gồm:
// Số khác 0 (ví dụ: 1, -1, 3.14)
// Chuỗi khác rỗng (ví dụ: "Hello", "Non-empty string")
// Giá trị Boolean true
// Đối tượng (object)
// Mảng (array)
// Hàm (function)
// Các giá trị đặc biệt như Infinity, NaN


// Giá trị "falsy" đại diện cho các giá trị được xem là sai. Trong JavaScript, các giá trị falsy bao gồm:
// Số 0
// Chuỗi rỗng ("")
// Giá trị Boolean false
// Giá trị null
// Giá trị undefined
// Giá trị NaN
// Khi sử dụng trong chương trình JavaScript, 
// khái niệm truthy và falsy thường được sử dụng trong các cấu trúc điều kiện (if, else, switch) hoặc trong các phép so sánh.

let value = prompt("Nhập vào một giá trị bất kì: ");

if (value) {
  console.log("Giá trị đã nhập là truthy.");
} else {
  console.log("Giá trị đã nhập là falsy.");
}