let number = prompt("Enter a number:");
number = Number(number);

for (let i = 1; i <= 10; i++) {
  console.log(`${number} × ${i} = ${number * i}`);
}
