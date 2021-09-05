var expect = chai.expect;

describe("Myfunction", function() {
    describe("#isRoundWinner", function() {
        it("should compare the 2 cards and see if the first is greater than the second", function() {
            var x = isRoundWinner(10 > 8);
            expect(x).to.equal("true");
        });
        it("should throw an error if cardTwo is greater than cardOne.", function() {
            expect(function() {
                isRoundWinner(cardOne < cardTwo);
            }).to.throw(Error);
        });
    });
}); //I was unable to figure out how to correct the Reference Error for line 6 in time.