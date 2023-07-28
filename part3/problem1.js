function primeNumber(number) {
    console.time("isprime")
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    const sqrt = Math.sqrt(number);
  
    for (let i = 5; i <= sqrt; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    console.timeEnd("isprime")
    return true;
  }

  module.exports = primeNumber;

  console.log(primeNumber(1000000007)) // true
