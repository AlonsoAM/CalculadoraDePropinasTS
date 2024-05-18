import {useState} from "react";
import {ItemMenu, OrderItem} from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: ItemMenu) => {
        const newItem: OrderItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }

    console.log(order)


    return {

        addItem

    }
}