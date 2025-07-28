let count = 0;
let number = 2;
while (count < 20) {
    let giatri = true;
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            giatri = false;
            break;
        }
    }
    if (giatri) {
        console.log(i);
        count++;
    }
    number++;
}

