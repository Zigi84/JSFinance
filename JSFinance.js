//JSFinance
//Copyright 2018 Igor Milosavljevic MIT licence
//Standardized to MS Excel
var JSFinance = function () {};

/** 
 *  @function FV Computes the future value with compounding interest rate
 *  @param {number} rate - Rate of interest expressed as a decimal
 *  @param {number} numPeriods - Number of periods
 *  @param {number} pmt - Payment per period
 *  @param {number} pv - Present value
 *  @param {number|boolean} when When the payment is due, 1==true at the end of the period 0==false payment at start of the period
 *  @returns {number} Future value
 */
JSFinance.prototype.FV = function (rate, numPeriods, pmt,pv,when) {
   let result = 0;
   if(rate == 0){
       result = -1*(pv+(numPeriods*pmt))
   }else{
       let temp = rate + 1;
       result = ((1-Math.pow(temp,numPeriods))*(when?temp:1)*pmt/rate - pv*Math.pow(temp,numPeriods))
   }
   return result;
}
let finance = new JSFinance();
console.log(finance.FV(0.12,10,-200,-500,1));
console.log(finance.FV(0,10,-200,-500,1)) //2.5000