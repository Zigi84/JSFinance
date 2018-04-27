var assert = require('assert');
var chai = require('chai');


JSFinance = require('../jsfinance');
var finance = new JSFinance();

describe('JSFinance', function () {
    describe('Future Value FV()', function () {
        it('Should calculate the future value correctly', function () {
            let finance = new jsfinance();
            assert.equal(finance.fv(0.12, 10, -200, -500, 1), 5483.84);
            assert.equal(finance.FV(0, 10, -200, -500, 1), 2500);
            assert.equal(finance.fv(0.12, 10, -200, -500, 0), 5062.67);
            assert.equal(finance.FV(0, 10, -200, -500, 0), 2500);
        });
    });
});