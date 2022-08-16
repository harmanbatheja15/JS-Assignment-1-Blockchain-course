

// Problem 1: Write a program to find whether a given year is a leap year or not
function check_leapyear(year) {

    console.log("");
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
    console.log("");

}
check_leapyear(2022);


// Problem 2: Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function convert_temperature(temp, unit) {
    if (unit == 'C' || unit == 'c') {
        console.log(`${temp}°C is ${(temp * 9 / 5) + 32}°F`);
    } else if (unit == 'F' || unit == 'f') {
        console.log(`${temp}°F is ${(temp - 32) * 5 / 9}°C`);
    } else {
        console.log('Error! Invalid unit.');
    }
    console.log("");
}
convert_temperature(45, 'F');


// Problem 3: Write a program to find the factorial of a number.
function factorial(num) {
    // checking if number is negative
    if (num < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    // if number is 0
    else if (num === 0) {
        console.log(`The factorial of ${num} is 1.`);
    }
    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }
    console.log("");
}
factorial(5);
