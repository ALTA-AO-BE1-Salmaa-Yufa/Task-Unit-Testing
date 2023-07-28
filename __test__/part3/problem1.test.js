const primeNumber = require("../../part3/problem1")

//test suites
describe("problem1 - primeNumber", () =>{
//test case    
    test("test case 4", () => {
        expect(primeNumber(1000000007)).toEqual("true")
    });
});
