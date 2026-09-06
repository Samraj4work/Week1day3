function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
let myNumber = 5;

console.log("The number", myNumber, "is", checkNumberType(myNumber));
