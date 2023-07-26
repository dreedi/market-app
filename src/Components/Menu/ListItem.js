import React from "react";
import styled from "styled-components";
import { localCurrency } from "../Functions/secondaryFunction";


const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const Item = styled.li`
    width: 400px;
    height: 155px;
    margin-top: 30px;
    margin-right: 30px;
    padding: 15px;
    color: #fff;
    font-size: 30px;
    background-image:${(props) => `url(${props.img})`} ;
    background-position:center;
    background-size:cover;
    z-index:1;
    position:relative;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #000;
        opacity: .3;
        z-index: -1;
     }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 50px 30px rgba(0,0,0,.78);
    }
 
`;



export const ListItem = ({part,setOpenItem})=> {

    return (
        <List>
            {part.map(item=>(
                 <Item onClick={()=> setOpenItem(item)} 
                 key={item.id} 
                 img = {item.img} 
                 >
                    <p>{item.name}</p>
                    <p>{ localCurrency(item.price)}</p>
                    
                 </Item>
            ))}
        </List>
    )
}