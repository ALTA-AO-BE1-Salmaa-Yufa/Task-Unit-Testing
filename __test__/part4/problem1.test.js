const frog = require("../../part4/problem1")

//test suites
describe("problem1 - frog", () =>{
//test case    
    test("test case 7", () => {
        expect(frog([10, 30, 40, 20])).toEqual([30])
    });
});

//console.log(frog([10, 30, 40, 20])); // 30