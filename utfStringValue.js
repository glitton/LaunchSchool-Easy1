const string = "Four score";

function stringValue(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(stringValue(string));
