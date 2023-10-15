import { useState } from "react";

const Boton = (mostrar, setMostrar) => {

    const [game, setGame] = useState([]);
    const [contador, setContador] = useState(2);


    const siguiente = async () => {

        const url = `https://api.rawg.io/api/games?dates=2019-09-01%2C2023-10-14&key=53cdb1164b1f439ea262ce6365b3936e&page=${contador}&platforms=18%2C1%2C7`;
        const res2 = await fetch(url);
        const data2 = await res2.json();
        setGame(data2.results)
        console.log(game);
        console.log(url);
        setContador(contador + 1)
        console.log(contador)
    }

    const atras = async () => {

        const url = `https://api.rawg.io/api/games?dates=2019-09-01%2C2023-10-14&key=53cdb1164b1f439ea262ce6365b3936e&page=${contador}&platforms=18%2C1%2C7`;
        const res = await fetch(url);
        const data = await res.json();
        setGame(data.results)
        if (contador > 2) {
            setMostrar(true)
            setContador(contador - 1)
        } else {
            setMostrar(false)
        }

        console.log(contador)
    }


    return (
        <div className="row text-center row-cols-1 row-cols-md-2 row-cols-xl-2 g-4">
            <div className="col">
                {
                    mostrar && < button onClick={atras} type="button" className="btn btn-primary g-3">Volver atras</button>
                }
            </div>
            <div className="col">
                {
                    <button onClick={siguiente} type="button" className="btn btn-primary g-3">Ir adelante</button>
                }
            </div>
        </div>)
}

export default Boton