const dragonOfLoowater = require("../../part4/problem3")

//test suites
describe("problem3 - dragonOfLoowater", () =>{
//test case    
    test("test case 9", () => {
        expect(dragonOfLoowater([1, 2, 3])).toEqual(["no solution"])
    });
});


//console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11