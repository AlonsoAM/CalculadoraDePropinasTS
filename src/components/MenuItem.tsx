import type {ItemMenu} from "../types";
import {formatcurrency} from "../helpers";

type MenuItemProps = {
    item: ItemMenu
    addItem: (item: ItemMenu) => void
}

export const MenuItem = ({item, addItem}: MenuItemProps) => {
    return (
        <button className={'border-2 border-teal-400 w-full p-3 flex justify-between rounded-md hover:bg-teal-200'}
                onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className={'font-black'}>{formatcurrency(item.price)}</p>
        </button>
    )
}
