import {useState} from "react";
import {ItemMenu, MenuID, OrderItem} from "../types";

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

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

    const removeItem = (id: MenuID) => {
        const updateOrder = order.filter(order => order.id !== id)
        setOrder(updateOrder)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}