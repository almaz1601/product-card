//import { comments } from "./comments.js";

// 2.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter(number => number >= 5);
console.log(numbersFromFive);

// 3.
const countries = [
  "KSA",
  "UAE",
  "USA",
  "Russia",
  "China"
];
const isCountryExists = countries.includes("Russia");
console.log(isCountryExists);

// 4. Функция, которая переворачивает массив
function reverseArray(array) {
  array.reverse();
}
const reversedNumbers = reverseArray(numbers);
const reversedCountries = reverseArray(countries);
console.log(reversedNumbers);
console.log(reversedCountries);

//7. 
const commentsWithDotCom = comment.filter((comment) =>
  comment.email.includes(".com"));

console.log(commentsWithDotCom);
//8.
comments.forEach((comment) => {
  comment.postId = comment.id <= 5 ? 2 : 1;
});
updatePostId(comments);
console.log(comments);

//9.
const shortComments = comments.map(({ id, username }) => ({ id, username }));
console.log(shortComments);
//10.
function checkInvalidComments(comments) {
  comments.forEach((comment) => {
    comment.isInvalid = (comment.body?.length || 0) > 180;
  });
}
checkInvalidComments(comments);
console.log(comments);