//factorial
// function findFactorial(num) {
//     let s =1
//     for (let i = s; i <= num; i++) {
//         s*=i
//     }
//     return s
// }
// console.log(findFactorial(5));

//mecaguyn
// function biggest(a,b,c) {
//     if(a>b>c){
//         return a
//     }else if(a>b<c){
//         return c
//     }
//     return b
// }
// console.log(biggest(2981,1,9038494879));

//zangvaci meci index

// function indexOfTheBiggestNumber(arr){
//     let s = 0
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i]>arr[s]){
//             s=i
//         }
//     }
//     return s
// }
// console.log(indexOfTheBiggestNumber([0,-182791,76435489570,65324789098032,8838]));

// ete gone meky bajanvum e 3 ev 5

// function atLeastOne(...arr) {

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(atLeastOne(1, 5, 3));

//ete drakan en true
// function checkIfPositive(...arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkIfPositive(1762384,6273,10,838));

//leetcode

// function addUp(nums,target) {
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]+nums[i+1]==target){
//             return [i,i+1]
//         }
//     }
// }
// console.log(addUp([3,3],6));//wrong right one is on leet

//
// function plusOne(digits) {
//     let toNum = BigInt(digits.join(""))+BigInt(1)
//     return  String(toNum).split("").map(Number)
// }
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
// console.log(Math.sqrt(8));

// function lengthOfLastWord(s) {
//     let a = s.trim()
//     let arr = a.split(" ")
//     return arr[arr.length-1].length;
// }
// console.log(lengthOfLastWord("   fly me   to   the moon  "));

//medium problem of substrings
// function longestSubstringWithoutDublicate(s) {
//   let max = [];
//   let maxLength = [];
//   for (let i = 0; i < s.length; i++) {
//     console.log(max.includes(s[i]));
//     if (!max.includes(s[i])) {
//       max.push(s[i]);
//       maxLength.push(max.length);
//     } else {
//       while (max.includes(s[i])) {
//         max.shift();
//       }
//       max.push(s[i]);
//     }
//   }
//   console.log(max);
//   return maxLength.length > 0 ? Math.max(...maxLength) : 0;
// }
// console.log(longestSubstringWithoutDublicate("aab"));

//single number
// function singleNumber(num) {
//     let res = 0
//     for (let i = 0; i < num.length; i++) {
//         res ^=num[i]
//     }
//     return res
// }
// console.log(singleNumber([2,2,1]));
// let arr= [2,2,1]
// let s = arr.shift(arr[0])
// console.log(s);

//
function multiply(num1,num2) {
    let first = BigInt(num1)
    let second = BigInt(num2)
    let mul = first*second
    return mul+""
}
console.log(multiply("123456789","987654321"));