import {useState} from "react";
import {ItemMenu, OrderItem} from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    
    const addItem = (item: ItemMenu) => {
        console.log('Agregando...', item)

    }

    return{

        addItem

    }
}