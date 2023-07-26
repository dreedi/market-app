import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";

import { ListItem } from "./ListItem";
import { Banner } from "./Banner";



const MenuStyled = styled.main`
 background: #ccc;
 margin-top: 80px; 
 margin-left:380px; 

`;

const SectionMenu = styled.section `
padding:30px;
`

export const Menu = ({setOpenItem})=> {
    return (
     
      <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem part ={dbMenu.burger} setOpenItem= {setOpenItem}/> {/* setOpenItem  - это приходит с App и дальше вниз идет */}
           
        </SectionMenu>
        <section>
             <h2>
                Закуски/Напитки
             </h2>
             <ListItem part ={dbMenu.other} setOpenItem= {setOpenItem}/>
        </section>
        
      </MenuStyled>
     
    )
}
