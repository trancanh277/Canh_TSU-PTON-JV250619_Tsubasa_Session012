// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for(i = 2; i < 20; i++) {
//     let next = a + b;
//     console.log(next);
//     a = b;
//     b = next;

// }

// let n = +prompt("nhập số giai thừa muốn in: n!");
// let giaithua = 1;
// for(i = 1; i <= n; i++) {
//     giaithua *= i;
// }
// alert(`giai thừa của ${n}! = ${giaithua}`)


let laisuat = parseFloat(prompt("Nhập vào lãi suất hàng tháng: %")) / 100 / 12;
let thoigian = +prompt("Nhập vào thời gian gửi tiền: tháng");
let sotien = +(prompt("Nhập vào số tiền gửi ban đầu: VND"));
for(i = 1; i <= thoigian; i++) {
    sotien = sotien * (1 + laisuat);
}
alert(`Số tiền được nhận sau ${thoigian} gửi là ${sotien}`);