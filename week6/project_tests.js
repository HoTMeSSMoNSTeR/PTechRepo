let expect = chai.expect;


describe('MyFunctions', function () {
    describe('#total', function () {
        it('should take in an array and add all the values together to get the sum of all values', function () {
            var x = total([1, 2, 3, 4, 5]);
            expect(x).to.equal(15);
        });
    });
});