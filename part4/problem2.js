function simpleEquations(a, b, c) {
    for (let x = 1; x <= 10000; x++) {
        for (let y = 1; y <= 10000; y++){
            let z = a - x - y;
            
            if (x*y*z === b) {
                if (x**2 + y**2 + z**2 === c) {
                return '${x} ${y} ${z}';
                }
            }
        }
    }
    return "No solution.";
}

module.exports = simpleEquations;
   console.log(simpleEquations(1, 2, 3));
   console.log(simpleEquations(6, 6, 14));