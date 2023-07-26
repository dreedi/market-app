import { useState } from "react";

export function useCount(startCount) {  /* -startCount это уже выбранное количество */
    const[count, setCount] = useState(startCount || 1); /* - сдесь если условие равно true, то возвращается startCount иначе 1  */
    function onChange(e) {    /* -мы придумали название onChange - эта не зарезервированная функция */
       setCount(e.target.value);
    }
    return {count,setCount,onChange}  
}