let numberA = +prompt("Mời bạn nhập vào số a");
let numberB = +prompt("Mời bạn nhập vào số b");
if (numberA % numberB === 0) {
    console.log("Số a chia hêt cho b");
} else if (numberA % numberB != 0) {
    console.log("Số a không chia hết cho b");
}
let age = +prompt("Mời nhập vào tuổi");
if (age < 15) {
    console.log(age);
    console.log("Bạn chưa đủ tuổi vào lớp 10");
} else if (age >= 15) { console.log("Bạn đã đủ tuổi vào lớp 10"); }

let integer = parseInt(prompt("Mời bạn nhập vào số nguyên"));
if (integer > 0) {
    console.log("Số bạn nhập vào là số lớn hơn 0");
}
else if (integer < 0) {
    console.log("Số bạn nhập vào là số nhỏ hơn 0");

}

let maxA = parseInt(prompt("Nhập vào số nguyên a"));
let maxB = parseInt(prompt("Nhập vào số nguyên b"));
let maxC = parseInt(prompt("Nhập vào số nguyên c"));
if (maxA > maxB && maxA > maxC) {
    console.log("a là số nguyên lớn nhất");
} else if (maxB > maxC) {
    console.log("b là số nguyên lớn nhất");
} else { console.log("c là số nguyên lớn nhất"); }

let scoreA = parseFloat(prompt("Nhập vào tổng điểm 2 bài kiểm tra miệng"));
let scoreB = parseFloat(prompt("Nhập vào tổng điểm 2 bài kiểm tra 15'"));
let scoreC = parseFloat(prompt("Nhập vào điểm thi giữa kì"));
let scoreD = parseFloat(prompt("Nhập vào điểm thi cuối kì"));

let scoreE = ((scoreA + scoreB) + (scoreC * 2) + (scoreD * 3)) / (4 + 5);
if (scoreE <= 4.9) {
    console.log(scoreE);
    console.log("Xếp hạng học lực: Yếu");
} else if (scoreE >= 5.0 && scoreE <= 6.4) {
    console.log(scoreE);
    console.log("Xếp hạng học lực: Trung Bình");
} else if (scoreE >= 6.5 && scoreE <= 7.9) {
    console.log(scoreE);
    console.log("Xếp hạng học lực: Khá");
} else if (scoreE >= 8.0 && scoreE <= 8.9) {
    console.log(scoreE);
    console.log("Xếp hạng học lực: Giỏi");
} else if (scoreE >= 9.0) {
    console.log(scoreE);
    console.log("Xếp hạng học lực: Xuất Sắc");
}
