function onesDigit(n) {
  // Check if the input is a positive integer
  if (!Number.isInteger(number) || number <= 0) {
    throw new Error("Input must be a positive integer.");
  }

  // Return the ones digit of the number
  return number % 10;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
