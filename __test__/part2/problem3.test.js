const fibonacci = require("../../part2/problem3")

//test suites
describe("problem3 - fibonacci", () =>{
//test case    
    test("test case 3", () => {
        expect(fibonacci(0)).toEqual(0)
    });
});