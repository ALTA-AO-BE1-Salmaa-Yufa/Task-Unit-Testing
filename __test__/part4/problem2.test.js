const simpleEquations = require("../../part4/problem2")

//test suites
describe("problem2 - simpleEquation", () =>{
//test case    
    test("test case 8", () => {
        expect(simpleEquations([1, 2, 3])).toEqual(["no solution"])
    });
});

// simpleEquations(1, 2, 3)  // no solution
// simpleEquations(6, 6, 14) // 1 2 3