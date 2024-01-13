let number = prompt("Nhập vào số có 4 chữ số: ");

let i = 0;

if(number.length !==4){
    console.log("Nhập số không hợp lệ .Vui lòng nhập lại số có 4 chũ số");
}else{
    for (let i = 0; i < number.length; i++) {
        console.log("Chữ số thứ " + (i + 1) + ": " + number[i]);
    }
}