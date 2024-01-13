let number1 = +prompt("Nhập vào số thứ nhất");
let number2 = +prompt("Nhập vào số thứ hai");
let phepTinh = prompt("Nhập phép tính (+, -, *, /):");


if(typeof(number1) === `number`){
    console.log("Số thứ nhất không hợp lệ");
}
if(typeof(number2) === `number`){
    console.log("Số thứ hai không hợp lệ");
}


if(phepTinh !== " + " && phepTinh !== " - " && phepTinh !== " * " && phepTinh !== " / "){
    console.log("Phép tính không hợp lệ");
}

let ketQua;
switch (phepTinh) {
  case "+":
    ketQua = number1 + number2;
    break;
  case "-":
    ketQua = number1 - number2;
    break;
  case "*":
    ketQua = number1 * number2;
    break;
  case "/":
    ketQua = number1 / number2;
    break;
    default:
        console.log("Không hợp lệ");
}

console.log("Kết quả:", ketQua);
alert(`Kết quả ${ketQua}`)