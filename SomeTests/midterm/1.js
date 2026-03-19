let n = Number(prompt("Enter a number:"));

let result = 1;

for (let i = 1; i <= n; i++) {
  result *= i;
}

console.log("Factorial:", result);