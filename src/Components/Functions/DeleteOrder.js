import { useState } from "react";
export function DeleteOrder () {
    const [delItems, setDeltItems] =useState([]);


    const removeOrder = (id) => {
        const newDel = delItems.filter(item => item.id !== id);
        console.log(id)
        setDeltItems(newDel);

    }

    return {delItems,setDeltItems,removeOrder}
}