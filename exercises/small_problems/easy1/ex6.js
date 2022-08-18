function shortLongShort(str1, str2) {
  const shortString = (str1.length > str2.length ? str2 : str1);
  const longString = (str1.length > str2.length ? str1 : str2);

  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
