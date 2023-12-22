// JavaScript: 字串反轉

function reverseString(str) {
  // 實作你的解答
  let reversedArray = str.split("").reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”

