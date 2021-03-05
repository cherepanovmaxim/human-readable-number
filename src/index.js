const unit = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const des = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

const overTen = [
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

module.exports = function toReadable(num) {
    if (num < 0 || num > 999) {
        return "Number out of range";
    } else if (typeof num !== "number") {
        return "Numbers only";
    } else if (num == 0) {
        return "zero";
    } else if (num > 10 && num < 20) {
        return overTen[num.toString().charAt(1) - 1];
    } else if (num.toString().length === 1 && num !== 0) {
        return unit[num - 1];
    } else if (num.toString().length === 2 && num % 10 === 0) {
        return des[num.toString().charAt(0) - 1];
    } else if (num.toString().length === 2 && num % 10 !== 0) {
        return (
            des[num.toString().charAt(0) - 1] +
            " " +
            unit[num.toString().charAt(1) - 1]
        );
    } else if (num.toString().length === 3 && num % 100 == 0) {
        return unit[num.toString().charAt(0) - 1] + " " + "hundred";
    } else if (
        num.toString().length === 3 &&
        num % 100 !== 0 &&
        num.toString().charAt(1) == 0
    ) {
        return (
            unit[num.toString().charAt(0) - 1] +
            " " +
            "hundred" +
            " " +
            unit[num.toString().charAt(2) - 1]
        );
    } else if (
        num.toString().length === 3 &&
        num % 100 !== 0 &&
        num.toString().charAt(1) + num.toString().charAt(2) > 10 &&
        num.toString().charAt(1) + num.toString().charAt(2) < 20
    ) {
        return (
            unit[num.toString().charAt(0) - 1] +
            " " +
            "hundred" +
            " " +
            overTen[num.toString().charAt(2) - 1]
        );
    } else if (
        num.toString().length === 3 &&
        num % 100 !== 0 &&
        (num.toString().charAt(1) + num.toString().charAt(2)) % 10 == 0
    ) {
        return (
            unit[num.toString().charAt(0) - 1] +
            " " +
            "hundred" +
            " " +
            des[num.toString().charAt(1) - 1]
        );
    } else if (
        num.toString().length === 3 &&
        num % 100 !== 0 &&
        (num.toString().charAt(1) + num.toString().charAt(2)) % 10 !== 0 &&
        num.toString().charAt(1) !== 0
    ) {
        return (
            unit[num.toString().charAt(0) - 1] +
            " " +
            "hundred" +
            " " +
            des[num.toString().charAt(1) - 1] +
            " " +
            unit[num.toString().charAt(2) - 1]
        );
    }
};

