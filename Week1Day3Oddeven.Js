

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let myNumber = 7;
console.log("The number", myNumber, "is", isOddOrEven(myNumber));
