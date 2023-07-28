const pairSum = require("../../part3/problem3")

//test suites
describe("problem3 - pairSum", () =>{
//test case    
    test("test case 5", () => {
        expect(pairSum([1, 2, 3, 4, 6], 6)).toEqual([1, 3])
    });
});
//console.log(PairSum([1, 2, 3, 4, 6], 6)) // [1, 3]
