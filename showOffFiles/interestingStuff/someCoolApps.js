// **isPalindrome.**
console.log("----Exercise isPalindrome----");

// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
// palindrome: racecar, mom, radar, rotator, Anna, Hannah, tacocat

const isPalindrome = (str) => {
  let strArr = str.toLowerCase();
  //   let rounds = Math.floor(strArr.length / 2); //for the loop but actually unnecessary
  //

  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[0] == strArr[strArr.length - 1]) {
      strArr = strArr.substring(1, strArr.length - 1);
    }
  }
  if (strArr.length == 0 || strArr.length == 1) {
    return `Great! Your word ${str} is a palindrome!`;
  } else {
    return `Sorry, your word ${str} is not a palindrome. :(`;
  }
  //   return strArr;
};

let palindrome = "radar";
console.log(isPalindrome(palindrome));
console.log(isPalindrome("Anton"));
console.log(isPalindrome("Anna"));
