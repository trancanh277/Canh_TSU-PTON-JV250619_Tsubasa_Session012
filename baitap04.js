// for (i = 1; i < 100; i = i + 1) {
//     console.log(i);
//     if (i === 99) { console.log("Hoàn thành vòng lặp"); }
// }


// let temple = +prompt("Nhập vào nhiệt độ");
// while (temple > 100 || temple < 20) {

//     if (temple > 100) {
//         temple = +prompt("Nhiệt độ quá cao, mời giảm nhiệt độ");
//     }
//     else if (temple < 20) {
//         temple = +prompt("Nhiệt độ quá thấp, mời tăng nhiệt độ");
//     }
// }


// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for (let i = 2; i < 20; i++) {
//   let next = a + b;
//   console.log(next);
//   a = b;
//   b = next;
// }


// let a = 0, b = 1;
// for (let i = 2; ; i++) {
//     let next = a + b;
//     if (next % 5 === 0) {
//         console.log(`Số Fibonacci đầu tiên chia hết cho 5 là: ${next}`);
//         console.log(`vị trí thứ " ${ i + 1}`);
//     break;
// }
// a = b;
// b = next;
// }


// let a = 0, b = 1;
// let total = a + b;
// for (let i = 2; i < 20; i++) {
//   let next = a + b;
//   total = total + next;
//   a = b;
//   b = next;
//   console.log( total);
// }


// let total = 0;
// let count = 0;
// let number = 1;
// while(count < 30){
//     if(number % 7 === 0){
//         total = total + number;
//         count = count + 1;
//     }
//     number = number + 1;
// }
// console.log(total);


for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { console.log("FizzBuzz"); }
    else if (i % 3 === 0) { console.log("Fizz"); }
    else if (i % 5 === 0) { console.log("Buzz"); }
    else { console.log(i); }
}
