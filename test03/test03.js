// JavaScript: 重構
// 問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  // let formattedName = '';
  //   if (firstName) {
  //     formattedName += firstName;
  //   }

  //   if (lastName) {
  //     formattedName += " " + lastName;
  //   }

  //   return formattedName;

  let formattedName =
    (firstName ? firstName : "") + (lastName ? " " + lastName : "");

  return formattedName;
}

// 原因：
// 此函式有兩個參數分別是firstName和lastName
// 原本的結構是使用兩個if來判斷是否有對應的參數
// 來避免在姓名的開頭或結尾添加多餘的空格

// 重構之後把兩個if合併成條件判斷式，語法比較簡潔，在一行內表達跟原本程式相同的邏輯。
