function logOddNumbers(upperNumber) {
  for (let i = 1; i <= upperNumber; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

logOddNumbers(99);
