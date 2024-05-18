import {useState} from "react";
import {ItemMenu, OrderItem} from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: ItemMenu) => {

        const itemExist = order.findIndex(orderItem => orderItem.id === item.id)
        if (itemExist >= 0) {

            const updatedOrder = [...order]
            updatedOrder[itemExist].quantity++
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