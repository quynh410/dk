let month = +prompt("Nhập vào tháng (từ 1 đến 12): ");
let year = +prompt("Nhập vào năm: ");


if (month >= 1 && month <= 12 && year > 0) {
    let numberOfDays = new Date(year, month, 0).getDate();
  console.log(`Số ngày trong tháng ${month} năm ${year} là ${numberOfDays}`);
} else {
  console.log("Giá trị nhập vào không hợp lệ.");
}