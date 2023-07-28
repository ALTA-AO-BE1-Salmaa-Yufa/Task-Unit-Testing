const exponentiation = require("../../part2/problem1")

//test suites
describe("problem1 - exponentiation", () =>{
//test case    
    test("test case 1", () => {
        expect(exponentiation([2, 3])).toEqual(8)
    });
});