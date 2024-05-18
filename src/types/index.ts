export type ItemMenu = {
    id: number
    name: string
    price: number
}

export type OrderItem = ItemMenu & {
    quantity: number
}

export type MenuID = ItemMenu['id']