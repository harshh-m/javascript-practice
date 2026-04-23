function checkNumber(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkNumber(7);

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("harsh"));
