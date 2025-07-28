// let doC = +prompt("Nhập độ C:");
// let doF = (doC * 1.8) + 35;
// if (!isNaN(doC)) {
//   alert(`${doC} độ C = ${doF} độ F`);
// } else {
//   alert("Giá trị không hợp lệ");
// }


// let dodai = +prompt("Nhập độ dài cần chuyển: mét");
// let feet = dodai * 3.2808;
// if (dodai > 0) {
//   alert(`${dodai} mét = ${feet} feet`);
// } else {
//   alert("Giá trị không hợp lệ");
// }


// let a = +prompt("Nhập vào độ dài cạnh a: mét");
// let dientich = a * a;
// if(a > 0) {
//   alert(`Diện tích hình vuông là ${dientich} mét vuông`);
// } else {
// alert("Giá trị nhập vào không hợp lệ");}


// let chieudai = +prompt("Nhập vào chiều dài hình vuông: mét");
// let chieurong = +prompt("Nhập vào chiều rộng hình vuông: mét");
// let hinhchunhat = chieudai * chieurong;
// if ( chieudai > 0 && chieurong > 0) {
//   alert(`Diện tích hình chữ nhật là: ${hinhchunhat} mét vuông`);
// } else {
//   alert("Giá trị nhập vào không hợp lệ")
// }


// let canha = +prompt("Nhập vào cạnh a hình tam giác: mét");
// let canhb = +prompt("Nhập vào cạnh b hình tam giác: mét");
// let hinhtamgiac = (canha * canhb) / 2;
// if ( canha > 0 && canhb > 0) {
//   alert(`Diện tích hình tam giác là: ${hinhtamgiac} mét vuông`);
// } else {
//   alert("Giá trị nhập vào không hợp lệ")
// }


// let soa = +prompt("Nhập vào hệ số a");
// let sob = +prompt("Nhập vào hệ số b");
// let x = -sob / soa;
// if (soa === 0) {
//   if ( sob === 0) {
//     alert("Phương trình có vô số nghiệm");
//   }
//   else {
//     alert("Phương trình vô nghiệm");
//   }
// }  else {
//   alert(`Phương trình có nghiệm duy nhất x = ${x} `);
// }


// let a = +prompt("Nhập vào hệ số a");
// let b = +prompt("Nhập vào hệ số b");
// let c = +prompt("Nhập vào hệ số c");
// let delta = (b * b) - (4 * a * c);
// if (a === 0) {
//   if (b === 0) {
//     if (c === 0) {
//       alert("Phương trình vô số nghiệm")
//     }
//     else {
//     alert("Phương trình vô nghiệm")
//   } 
//   } else {
//     let x = -c / b;
//     alert(`Phương trình có nghiệm duy nhất x = ${x} `);
//   }
// } else {
//   if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     alert(`Phương trình có nghiệm là:
//        x1 = ${x1}
//        x2 = ${x2} `);
//   }
//   else if (delta === 0) {
//     let x = -b / (2 * a);
//     alert(`Phương trình có nghiệm kép là x1 = x2 = ${x} `);
//   }
//   else {
//     alert("Phương trình vô nghiệm");
//   }
// }


// let tuoi = +prompt("Mời nhập vào tuổi: ");
// if (tuoi > 0 && tuoi < 120) {
//   alert(`Tuổi của bạn là: ${tuoi}`)
// } else {
//   alert("Mời nhập lại")
// }


let a = +prompt("Nhập vào số thực a");
let b = +prompt("Nhập vào số thực b");
let c = +prompt("Nhập vào số thực c");
if ( a + b > c || a + c > b || b + c > a) {
  alert(" ba cạnh a, b, c là cạnh của 1 tam giác") 
} else {alert("3 số thực trên không phải là hình tam giác")}