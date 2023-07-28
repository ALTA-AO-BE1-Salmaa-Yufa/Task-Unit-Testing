const munculSekali = require("../../part3/problem2")

//test suites
describe("problem2 - munculSekali", () =>{
//test case    
    test("test case 5", () => {
        expect(munculSekali(1234123)).toEqual([4])
    });
});

//console.log(munculSekali("1234123"))    // [4]