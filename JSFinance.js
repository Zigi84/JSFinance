//JSFinance
//Copyright 2018 Igor Milosavljevic MIT licence
var JSFinance = function () {};
/*
 *  Compute the future value - interest rate coumpounds
 *  @param {number} pv - Present Value
 *  @param {number} rate - Rate of interest per period expressed as a decimal
 *  @param {number} nper - Number of compounding periods
 *  @returns {number} Future value
 */
JSFinance.prototype.FV = function (pv, rate, nper) {
    let fv = pv*((1+rate)**nper);
    return fv;
}

JSFinance.prototype.PV = function (){

}