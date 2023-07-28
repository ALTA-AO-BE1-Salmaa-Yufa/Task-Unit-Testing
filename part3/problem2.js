function munculSekali(input) {
    const digitCount = {};
  
    // Hitung berapa kali setiap angka muncul dalam string
    for (const digit of input) {
      digitCount[digit] = (digitCount[digit] || 0) + 1;
    }
  
    // Saring angka-angka yang muncul hanya satu kali
    const uniqueNumbers = [];
    for (const digit in digitCount) {
      if (digitCount[digit] === 1) {
        uniqueNumbers.push(Number(digit));
      }
    }
  
    return uniqueNumbers;
  }

module.exports = munculSekali;


console.log(munculSekali("1234123"))    // [4]
