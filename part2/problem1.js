function exponentiation(x, n) { // (2,3) -> 2 * 2 * 2
  if (n === 0) { // tidak memenuhi 
        return 1;
    } else if (n % 2 === 0) { //tidak memenuhi
        const y = exponentiation (x, n / 2); // (2,3/2)
        return y * y; //
        } else {
        return x * exponentiation (x, n - 1); // (2, 3 - 1)
    }
  }
  
  module.exports = exponentiation;
/* exponentiation (2,3)
    

*/

  
  console.log(exponentiation(2, 3)) // 8
