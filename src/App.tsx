import {useState} from "react";
import {menuItems} from "./data/db.ts";
import {MenuItem} from "./components/MenuItem.tsx";

const App = () => {

    const [data] = useState(menuItems)

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div>
                    <h2>Menú</h2>
                    {data.map((item) => (
                        <MenuItem key={item.id}/>
                    ))}
                </div>
                <div>
                    <h2>Consumo</h2>
                </div>
            </main>
        </>
    );
};

export default App
