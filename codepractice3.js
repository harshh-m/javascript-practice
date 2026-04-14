function largest(arr) {
  return Math.max(...arr);
}

console.log(largest([10, 5, 22, 8]));

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript")); 