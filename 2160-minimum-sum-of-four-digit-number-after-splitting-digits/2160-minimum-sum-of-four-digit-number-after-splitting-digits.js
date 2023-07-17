/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
     const numArr = [];
  let count = 3
  while(count > 0) {
    numArr.push(num % 10);
    num = Math.floor(num / 10);
    count--;
  } 
  numArr.push(num);
  numArr.sort();
  const num1 = `${numArr[0]}${numArr[2]}` ;
  const num2 = `${numArr[1]}${numArr[3]}`;
  return +num1 + +num2;
};