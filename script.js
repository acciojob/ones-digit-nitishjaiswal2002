function onesDigit(n) {
   const number = Number(n);
    if (!Number.isInteger(number) || number <= 0) {
        throw new Error("Input must be a positive integer");
    }
    return number % 10;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
