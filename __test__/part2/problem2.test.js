const largestNumber = require("../../problem2")

//test suites
describe("problem2 - LargestNumber", () =>{
//test case    
    test("test case 2", () => {
        expect(largestNumber([5, 2, 67, 37, 85, 19, 10])).toEqual(85)
    });
});