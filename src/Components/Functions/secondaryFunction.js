 export  function totalPriceCount(order) {
 const toppingsCount = order.topping && order.topping.filter(item =>item.checked).length; /* - в итоге это количество добавок */

 const toppingsPrice = order.price *0.1 *toppingsCount
  return (order.price +toppingsPrice)*order.count;
} /* - order -здесь возьмем   объект order */


export function localCurrency (val) {
  return val.toLocaleString('ru-Ru',{style:'currency',currency:'RUB'})
}