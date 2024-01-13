let a = +prompt("Nhập vào hệ số a");
let b = +prompt("Nhập vào hệ số b");
let ketQua;


if (a === 0) {
  if (b === 0) {
    ketQua = "Phương trình vô số nghiệm";
}else{
    ketQua = "Phương trình vô nghiệm";
}
}else{
  let x = -b / a;
  ketQua = `Nghiệm của phương trình là ${x}`;
}

console.log(ketQua);
alert(ketQua);