/*
bandingkan array yg hingga ketemu yg terbesar */


function largestNumber(array) {
    if (array.length === 1) { // lebih dari 1 elemen 
        return array[0]; // lanjut recursive
     } else {
        const lastElement = array.pop();
        const maxInRest =largestNumber(array);
        return lastElement > maxInRest ? lastElement : maxInRest;
     }}
  
     module.exports = largestNumber;

  console.log(largestNumber([5, 2, 67, 37, 85, 19, 10])) // 85
 

  