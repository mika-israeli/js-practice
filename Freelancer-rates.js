
export function dayRate(ratePerHour) {
    return ratePerHour *8;
   }
   
   export function daysInBudget(budget, ratePerHour) {
   return Math.floor(budget/(dayRate(ratePerHour)));
   }
   
   export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
     let dis=1-discount;
     let dayWork=dayRate(ratePerHour);
     let discountDays = Math.floor(numDays / 22);
     let sum=(discountDays*dayWork*dis*22)+(dayWork*(numDays%22));
     return Math.ceil(sum);
   }
     
     
    
   
   