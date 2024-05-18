import {useState} from "react";
import {ItemMenu, OrderItem} from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: ItemMenu) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {

            const updatedOrder = order.map((item: OrderItem) => item.id === item.id ? {
                ...item,
                quantity: item.quantity + 1
            } : item)
            setOrder(updatedOrder)


        } else {
            const newItem: OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }

    }


    return {
        order,
        addItem

    }
}