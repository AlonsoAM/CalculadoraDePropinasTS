import {useState} from "react";
import {menuItems} from "./data/db.ts";
import {MenuItem} from "./components/MenuItem.tsx";
import {useOrder} from "./hooks/useOrder.ts";
import {OrderContents} from "./components/OrderContents.tsx";
import {OrderTotals} from "./components/OrderTotals.tsx";

const App = () => {

    const [data] = useState(menuItems)
    const {addItem, order, removeItem} = useOrder()

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className={'p-5'}>
                    <h2 className={'text-4xl font-black'}>Menú</h2>
                    <div className={'space-y-3 mt-10'}>
                        {data.map((item) => (
                            <MenuItem key={item.id} item={item} addItem={addItem} />
                        ))}
                    </div>
                </div>
                <div className={'border border-dashed border-slate-300 p-5 rounded-lg space-y-10'}>
                   <OrderContents order={order} removeItem={removeItem}/>
                    <OrderTotals order={order}/>
                </div>
            </main>
        </>
    );
};

export default App
