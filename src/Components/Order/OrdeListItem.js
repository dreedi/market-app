import React, { useRef } from "react";
import styled from "styled-components";
import trashImg from '../../Images/trash.svg'
import { totalPriceCount,localCurrency } from "../Functions/secondaryFunction";


// import { DeleteOrder } from "../Functions/DeleteOrder";

const OrderItemStyled = styled.li `
     display:flex;
     margin:15px 0;

`
const ItemName = styled.span `
    flex-grow:1;
`

const ItemPrice = styled.span `
     margin-left:20px;
     margin-right:10px;
     min-width:65px;
     text-align:right;
`
const TrashBtn = styled.button`
	background-image: url(${trashImg});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-color: transparent;
	cursor: pointer;
	width: 24px;
	height: 24px;
	border: none;
`;


export const OrderListItem = ({order,deleteItem,index,setOpenItem}) => {
  
   const refDeleteBtn = useRef(null);  
   console.log(refDeleteBtn);
    return (
        <OrderItemStyled onClick={(e)=> e.target !== refDeleteBtn.current && setOpenItem({...order,index})}>{/*  - refDeleteBtn.current - текущая кнопка корзины , т.к. щелчок по всему элемнту более приоритетный, то нам нужно отфильтровать, чтобы чисто на корзину щелчок перешел !== - это знак неравенства */}
           <ItemName>{order.name}</ItemName>
           <span>{order.count}</span>
           <ItemPrice>{ localCurrency(totalPriceCount(order))}.</ItemPrice>
           {/* <TrashBtn  onClick={()=>{removeOrder(order.id)}} /> */}
           <TrashBtn ref = {refDeleteBtn} onClick={()=>deleteItem(index)}  /> {/* - ref , это не свойство , это прямая ссылка на карзину */}
        
        </OrderItemStyled>
    )
}