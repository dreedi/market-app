import React from "react";
import styled from "styled-components";
import { ButtonAdd } from "../Button/ButtonAdd";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/UseCount";
import { totalPriceCount,localCurrency } from "../Functions/secondaryFunction";
import { Toppings } from "./Toppings";
import { useTopping } from "../Hooks/useTopping";



const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;    
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 20;
	background: rgba(0,0,0, .5);
    
    
`;
const Modal = styled.div`    
	background: #fff;
	width: 500px;
	height: auto;
	margin-top: 100px;    
`;
const Banner = styled.div `
width:100%;
height:200px;
background-color:#000;
background-image:url(${(props)=>props.img});
background-size:cover;
background-position:center;

                                        

`;                                                          /* почему через колбек - мы должны это вернуть, фактически, можно 

                                                                    было так записать,  вот так${(props)=>  return props.img}  */ 
 const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(100% - 200px);
	padding-left: 37px;
	padding-right: 37px;
`;
const H3 = styled.h3`
	font-weight: 400;
	font-size: 30px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
`;
const TotalPriceItem = styled.div `
     display:flex;
     justify-content:space-between;
     margin-left:37px;
     margin-right:37px;
`



export const ModalWindow =({openItem,setOpenItem,orders,setOrders}) => {  /* orders,setOrders - теперь модальное окно знает про заказы */
      const counter = useCount(openItem.count); /* - то количество, которое заданно в модальном окне */
			const toppings = useTopping(openItem) /* - этот openItem пришел из App */
			const isEdit = openItem.index > -1; /* - возвращает true или false , просто без -1 - нулевой элемент это false, поэтому нужно это сравнение*/ 

			function editOrder() {
				const newOrders = [...orders];
				newOrders[openItem.index] = order; /* - openItem - это выбранный товар, который загружается в модальное окно */
				setOrders(newOrders);
				setOpenItem(null);
			}

     

			function closeModal (e) {
          if(e.target.id==='overlay')
		  setOpenItem(null)     /* когда щелчок, то убераем модальное окно, т.е. возвращаем начальное состояние  setOpenItem(null ) */
	  }
     
		const order = {
			/* name:openItem.name */ /*  - openItem объект в модальном окне    */
			...openItem, /* - сразу весь объект передаем */

			count:counter.count  ,        /* - это состояние из хука, нужно, чтобы в заказ передавать выбранное количество */
     topping:toppings.toppings   /* - первый toppings это переменная , которая содержит в себе объект возвращенный хуком, а воторой - это из базы данных */

		}; // объект для товара, который нужно добавить в  заказ

		function addToOrder() {
        setOrders([...orders, order]) ;    /* - часть хука, которая занимается обновлением заказа */
				/* ...orders - это те товары, которые есть в заказе, order - тот объект(заказ), который мы хотим добавить в ...orders */
				setOpenItem(null); /* -  закрывает модальное окно */

		}
/* 	if (!openItem) return null */    /* когда нет щелчка, то верни null */


    return (
         <Overlay  onClick = {closeModal} id = "overlay">   {/* когда щелкаем мимо окна */}
          <Modal>
               <Banner img ={openItem.img}/>  {/* срабатывает, когда делаем клик */}
			   <ModalContent>
				  <H3>
					<span>{openItem.name}</span>  {/*  openItem - это состояние item, по сути это и есть item, переданный с помощью хука */}
					<span>{localCurrency(openItem.price)}</span>

				  </H3>
					<CountItem counter ={counter}/>
				  {openItem.toppings && <Toppings {...toppings}/>}  {/* - openItem.toppings это товар, загруженный в модальное окно */}
					<TotalPriceItem><span>Сумма</span>
					 <span>{localCurrency( counter.count <1 ? openItem.price:totalPriceCount(order))}</span>
					</TotalPriceItem>
				  <ButtonAdd onClick={ isEdit ? editOrder:addToOrder}> {isEdit ? 'Редактировать': 'Добавить'}</ButtonAdd>
			   </ModalContent>
          </Modal>
          </Overlay>  


    )
}

