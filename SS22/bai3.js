

let number = +prompt("Nhập vào một số: ");


let squareRoot = Math.sqrt(number);
let isInteger = Number.isInteger(squareRoot);


if (squareRoot) {
  console.log(`Số ${number} là số chính phương.`);
} else {
  console.log(`Số ${number} không phải là số chính phương.`);
}


  
