//JSFinance
//Copyright 2018 Igor Milosavljevic MIT licence
var JSFinance = function () {};
/** 
 *  Calculates Future Value
 *  @function FV
 *  @param {number} rate - Rate of interest expressed as a decimal
 *  @param {number} numPeriods - Number of periods
 *  @param {number} pmt - Payment per period
 *  @param {number} pv - Present value
 *  @param {number|boolean} when When the payment is due, 1==true at the end of the period 0==false payment at start of the period
 *  @returns {number} Future value
 */
JSFinance.prototype.FV = function (rate, numPeriods, pmt, pv, when) {
    let result = 0;
    if (rate == 0) {
        result = -1 * (pv + (numPeriods * pmt))
    } else {
        let temp = rate + 1;
        result = ((1 - Math.pow(temp, numPeriods)) * (when ? temp : 1) * pmt / rate - pv * Math.pow(temp, numPeriods))
    }
    return result;
}
/**
 * Calculates Present Value
 * @function PV
 * @param {number} rate
 * @param {number} numOfPeriods
 * @param {number} pmt
 * @param {number} fv
 * @param {number} when
 * @returns {Number} Present Value
 */
JSFinance.prototype.PV = function (rate, numOfPeriods, pmt, fv, when){
    let result = 0;
    if (rate == 0) {
        result = -1 * ((numOfPeriods * pmt) + fv);
    } else {
        let temp = rate + 1;
        result = (((1 - Math.pow(temp, numOfPeriods)) / rate) * (when ? temp : 1) * pmt - fv) /
            Math.pow(temp, numOfPeriods);
    }
    return result;
}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = JSFinance;
        module.exports.JSFinance = JSFinance;
    }
}
