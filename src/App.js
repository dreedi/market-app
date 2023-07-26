import React  from "react";
import { GlobalStyle } from "./Components/Style/GlobeStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import  { Menu} from "./Components/Menu/Menu";
import {ModalWindow} from "./Components/Modal/ModalWindow";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/UseOrders";



function App() {

  // const [openItem,setOpenItem] = React.useState(null); // null - ничего там в начале нет

  const openItem = useOpenItem(); // openItem - это объект {openItem,setOpenItem} openItem.openItem - это когда мы хотим обратиться к объекту
  const orders = useOrders()  ; /* orders - объект, в нем  {orders,setOrders}  */


  return (
    <div>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}{...openItem}/>  {/* - openItem - это выбранный товар */}
      <Menu {...openItem}/> {/* прийдет весь объект со всеми значениями */}
      { openItem.openItem && <ModalWindow {...openItem} {...orders}/>}   {/* сюда попадут все составляющие хука*/}  {/* openItem.openItem && <ModalWindow - если свойство openItem.openItem - не пустое, то нужно нарисовать модальное окно */}  {/* && - сдесь это используется как оператор сравнения  */}
    </div>
  );
}

export default App;
