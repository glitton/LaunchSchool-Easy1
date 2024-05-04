function shortLongShort(str1, str2) {
  const str1Length = str1.length;
  const str2Length = str2.length;

  if (str1Length < str2Length) {
    console.log(`${str1}${str2}${str1}`);
  } else {
    console.log(`${str2}${str1}${str2}`);
  }
}

// shortLongShort("abc", "defgh");
// shortLongShort("abcde", "fgh");
shortLongShort("bennie", "luna");
