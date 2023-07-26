import React from "react";
import styled from "styled-components";
import { ButtonAdd } from "../Button/ButtonAdd";
import { OrderListItem } from "./OrdeListItem";
import { totalPriceCount, localCurrency } from "../Functions/secondaryFunction";


const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    flex-direction: column;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0, .25);
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 23px;
`;

/*контейнер для  списка товаров в заказе: */
const OrderContent = styled.div `
 flex-grow:1;
`

const OrderTitle = styled.h2 `
     text-align: centr;
     font-size: 39px;
     font-weight:400;
     text-transform:uppercase;
     margin-bottom:20px;
`
const OrderList = styled.ul `
      
`;


const Total = styled.div `
     display:flex;
     margin:0 35px 30px;
     & span:first-child{
        flex-grow:1;
     }
`

const TotalPrice = styled.span`
   text-align:center;
   min-width:65px;
   margin-left:20px;
`;

const EmptyList = styled.p `
  text-allign:left;
  margin-top:40px;
`
export const Order = ({orders,setOrders,setOpenItem}) => {

    const totalPriceOrder = orders.reduce((result, item) => {
              return totalPriceCount(item) + result;
    },0) ;

    const totalKol = orders.reduce((result,item)=> {
        return item.count +result
     },0);

     const deleteItem = (index) => {   /* - функция по удалению заказа */
        const newOrder =[...orders];
        newOrder.splice(index,1)
        setOrders(newOrder)
     }


    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                { orders.length ?  /*  - если orders.length - нет элементов, то его длина 0 и условие будет false */
                <OrderList>
                     {
                        orders.map((order,index)=>{
                            return <OrderListItem order = {order } deleteItem={deleteItem} index={index} key ={index} setOpenItem ={setOpenItem}/>  /* {order} - это именно объект с товаром, из общего массива с заказами */
                        })
                     }

                   
                    
                </OrderList> :
                <EmptyList>
                    Список заказов пуст!
                </EmptyList>

                }
            </OrderContent>
            <Total>
               <span>итого</span>
               <span>{totalKol}</span>
               <TotalPrice>{localCurrency(totalPriceOrder)}</TotalPrice>
            </Total>.
            <ButtonAdd>Оформить</ButtonAdd>
        </OrderStyled>
    )
}