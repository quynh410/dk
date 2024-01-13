let year = prompt("Nhập năm người dùng cần tìm:");

let kiemTra = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);

if(kiemTra){
    console.log(` Năm ${year} là năm nhuận.`);
}else{
    console.log(`Năm ${year} không phải là năm nhuận.`);
}