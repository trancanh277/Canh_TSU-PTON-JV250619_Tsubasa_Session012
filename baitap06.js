let loop = true;
let ten = "";
let tuoi = 0;
while (loop) {
    let luachon = +prompt(`Mời đưa vào sự lựa chọn:
1. Nhập tên của người dùng.
2. Nhập tuổi của người dùng.
3. In tên và tuổi của người dùng.
4. In bảng cửu chương của một số.
5. Kiểm tra số nhập vào là số chẵn hay lẻ.
6. Tính tổng các số từ 1 đến N .
7. In các số trong một dãy .
8. Kiểm tra số nhập vào có phải là số nguyên tố hay không.
9. In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
10. Thoát khỏi chương trình.`);


    switch (luachon) {
        case 1:
            ten = prompt("Mời nhập vào tên");
            break;
        case 2:
            tuoi = +prompt("Mời nhập vào tuổi");
            break;
        case 3:
            console.log(ten);
            console.log(tuoi);
            break;
        case 4:
            let so = +prompt("mời nhập vào số của bảng cửu chương muốn in");
            for (i = 1; i <= 10; i++) {
                console.log(`${so} x ${i} = ${so * i}`);  
            }
            break;
        case 5:
            let a = +prompt("Mời nhập vào 1 số bất kì");
            console.log(a % 2 === 0 ? "a là số chẵn" : "a là số lẻ");
            break;

        case 6:
            let n = +prompt("Mời nhập vào số n");
            let tong = 0;
            for (i = 1; i <= n; i++)
            tong += i;
            console.log("tổng là:",  tong);
            break;
        case 7:
            let dayso = prompt(" Mời nhập vào dãy số, cách nhau bằng dấu ,");
            let arr = dayso.split(",");
            console.log("Dãy số là:", arr);
            break;
        case 8:
            let nguyento = +prompt("Mời nhập vào 1 số");
            let kiemtra = nguyento > 1;
            for (i = 2; i <= Math.sqrt(nguyento); i++) {
                if (nguyento % i === 0) {
                    kiemtra = false;
                    break;
                }
            }
            console.log(kiemtra ? "là sô nguyen tố" : "không phải số nguyên tố");
            break;
        case 9:
            let chuoi = prompt(" Mời nhập vào chuỗi số, cách nhau bằng dấu ,");
            console.log(chuoi.split(",").reverse().join(","));
            break;
        case 10:
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}


