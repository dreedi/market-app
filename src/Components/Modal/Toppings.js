import React from "react";
import styled from "styled-components";


const ToppingWrap = styled.div `
     column-count:2;
     column-gap:15px;
     margin:5px 37px;
`;
const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
`;
const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export function Toppings({toppings,checkedTopping}) {
  return (
      <>
        <h3>Добавки</h3>
        <ToppingWrap>
        {toppings.map((item,index)=>{
          return (
            <ToppingLabel key = {index}>
            <ToppingCheckbox type="checkbox" checked ={item.checked} onChange = {()=>checkedTopping(index)}/>
              {item.name}
            </ToppingLabel>
          )
        })}

        </ToppingWrap>

      </>

  )
}