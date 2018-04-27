var JSFinance = require('jsfinance')
var assert = require('assert');
describe('JSFinance', function () {
    it('Should calculate the future value correctly', function () {
        var finance = new JSFinance();
        assert.equal(finance.fv(0.12, 10, -200, -500, 1), 5483.84);
        assert.equal(finance.FV(0, 10, -200, -500, 1), 2500);
        assert.equal(finance.fv(0.12, 10, -200, -500, 0), 5062.67);
        assert.equal(finance.FV(0, 10, -200, -500, 0), 2500);
    });
});