
/**
 * 
 * @param oldPrice 
 * @param price 
 * @returns 
 */
const CalcDiscount = (oldPrice: number, price: number) => {
  return Math.round((oldPrice - price) / (oldPrice / 100));
};

export default CalcDiscount;
