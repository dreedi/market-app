import { useState } from "react";


export function useTopping(openItem) {   /* - это не тот openItem, который в модальном окне, но реально содержимое такое же */
   const getTopping =( toppings )=> toppings.map(item=> {   /*  - тут создаем объект из массива, перебирает добавки выбранного товара и правращает массив со строками в массив с объектами */
      return {
        name:item,
        checked:false, /*  - это изначтально ненажатый флажек */
       };
   }) ;
    
   const readyTopping = openItem.topping ? openItem.topping: /* - если уже есть добавленные топпинги, то мы их и берем */
   openItem.toppings ? getTopping(openItem.toppings) :  [] /* - openItem.toppings-выбранный товар, если есть, то вызывыем функцию и передаем ей топпинги товара, который выбрали */
   

  const[toppings, setToppings] = useState(readyTopping);
  
  const checkedTopping = (index ) => {
    setToppings(toppings.map((item,i)=>{
      if(i ===index) {
        item.checked = !item.checked;  /* -если индек, по которому был щелчок,  совпадает с перебираемым индексом, то мы у этого элемента свойство checked меняем на противоположенное */
        
      }
      return item;
    }))
  }

  return {toppings, checkedTopping}
}