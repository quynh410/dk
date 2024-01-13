let a = +prompt("Nhập vào cạnh a");
let b = +prompt("Nhập vào canh b");
let c = +prompt("Nhập vào canh c");

if(a + b > c && b + c > a && a + c > b){
    console.log("Là 3 cạnh của 1 tam giác");
    alert("Là 3 cạnh của 1 tam giác");
}else{
    console.log("Không phải là cạnh của 1 tam giác");
    alert("Không phải là cạnh của 1 tam giác");                                                 
}