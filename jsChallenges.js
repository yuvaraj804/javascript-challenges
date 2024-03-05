// 1.print 1 to 10
export function oneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log("One To Ten Numbers", i);
  }
}

// 3.print odd numbers 1-100
export function oddNumbers() {
  for (let i = 1; i <= 100; i += 2) {
    console.log(" Odd Numbers 1 To 100", i);
  }
}
// oddNumbers();

// print 7th table
export function seventhTable() {
  for (let i = 1; i <= 10; i++) {
    let seven = 7 * i;
    console.log("7 *", i, "=", seven);
  }
}
// seventhTable();

// 4.print 1-10 tables
export function tables(digit) {
  for (j = 1; j <= 10; j++) {
    let table = digit * j;
    console.log(j, "*", digit, "=", table);
  }
}
export function multiples() {
  for (i = 1; i < 10; i++) tables(i);
  console.log();
}

// 5.sum 1 to 10
export function sumOneToTen() {
  let sum = 0;
  let i = 0;
  for (i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log("Sum of 1 to 10 :", sum);
}
//  sumOneToTen();

// 6.calc 10!
export function tenFactorial() {
  let sum = 1;
  let i = 1;
  for (i = 1; i <= 10; i++) {
    sum *= i;
  }
  console.log("Ten Factorial =", sum);
}

// 7.calc sum of odd numbers between 10 to 30

export function sumOfOddNumbers() {
  let sum = 0;
  let i = 0;
  for (let i = 11; i <= 30; i += 2) {
    sum += i;
  }
  console.log("Sum of Odd Numbers between 10 to 30 :", sum);
}

// 8.convert celsius to fahrenheit
export function celciusToFahrenheit(value) {
  let celcius = 32;
  let fahren = value * 1.8 + celcius;
  console.log("", value, "celsius is equal to", fahren, "Fahrenheit");
}

// 9.
// formula:(F - 32)*5/9=c
export function FahrenheitTocelcius(value) {
  let fahren = 5 / 9;
  let celcius = (value - 32) * fahren;
  console.log("", value, "Fahrenheit is equal to", celcius, "celcius");
}

// 10.calc sum of numbers in an array of numbers
export function sumOfArray(array) {
  let sum = 0;
  let i = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("Sum of Numbers in an Array :", sum);
}

//11. Average of Numbers in an array of numbers
export function avgsumOfArray(array) {
  let sum = 0;
  let avg;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    avg = sum / array.length;
  }
  console.log("Average of Numbers in an Array :", avg);
}

// 12.function recive only array of no. & return arrray of positive numbers
export function getPositiveNumbers(array) {
  let positiveNumbers = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value >= 1) {
      positiveNumbers.push(value);
    }
  }
  console.log(positiveNumbers);
  // return positiveNumbers;
}

// 13.find maximum number in an array of numbers
export function maximumNumber(array) {
  let maxi = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxi) {
      maxi = array[i];
    }
  }
  console.log(maxi);
}
// 14.First 10 Fibonacci numbers without recursion
export function FibonacciSeries() {
  let f0 = 0;
  console.log(f0);
  let f1 = 1;
  console.log(f1);
  let fi;
  for (let i = 1; i < 10; i++) {
    let fi = f0 + f1;
    console.log(fi);
    f0 = f1;
    f1 = fi;
  }
}
// 15..Find nth  Fibonacci numbers with recursion
export function findFibonnacci(n) {
  let f1 = 1;
  let f0 = 0;
  let fi;
  if (n <= 0) {
    console.log(0);
    return 0;
  } else if (n == 1) {
    console.log(1);
    return 0;
  }
  for (let i = 2; i <= n; i++) {
    fi = f0 + f1;
    f0 = f1;
    f1 = fi;
    //formula==>  fi=findFibonnacci(n-1)+findFibonnacci(n-2);
  }
  console.log(fi);
}
// 16.return a boolean specifying if a number is prime
export function isPrime(n) {
  
  if (n < 2) {
    console.log("false");
  }
  let squareRoot = Math.sqrt(n);
  for (let i = 2; i <= squareRoot; i++) {
    if (n % i == 0) {
      console.log("false");
      return;
    }
  }
  console.log(n);
}

// 17.calc sum of positive integer number
export function sumDigits(n) {
  let s = n.toString();
  let sum = 0;
  for (let i of s) {
    let digit = parseInt(i);
    sum += digit;
  }
  console.log(sum);
}

//18.first 100 prime numbers
function isPrimes(n) {
  
  let squareRoot = Math.sqrt(n);
  for (let i = 2; i <= squareRoot; i++) {
    if (n % i == 0) {
      return;
    }
  }
  console.log(n);
}
export function primeNumbers(n){
  
  for (let i = 2; i <= n; i++) {
    if (isPrimes(i)) {
      console.log("---",i)
      
    }
    
  }
}
// 18b). n-n primenumbers
export function getPrimes(np,startAt) {
  let arr=[];
  let i=startAt;
  while (arr.length<np) {
    if (isPrime(i)){
      arguments.push(i);
    }
    i++
  }

}


//19. revese an array
export function reverseAnArray(array) {
  let ar2 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    ar2.push(array[i]);
  }
  console.log("Reversed:", ar2);
}

//20. revese an string
export function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i];
    newString += char;
  }
  console.log(newString);
}

//21.merge two array results new array
export function mergeArray(array1, array2) {
  let array = [];
  for (let value of array1) {
    array.push(value);
  }
  for (let value of array2) {
    array.push(value);
  }
  console.log(array);
}

//22. calc sum of numbers in comma deligated string -"1.5,2.3,3.1,4,5.5,6,7,8,9,10.9"
export function sumOfCammaNumbers(string) {
  let array = string.split(",");
  let sum = 0;
  for (let n of array) {
    sum += parseFloat(n);
  }
  console.log(sum);
}
