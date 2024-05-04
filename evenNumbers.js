for (let i = 2; i < 101; i += 2) {
  console.log(i);
}

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
