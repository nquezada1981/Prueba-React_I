import { useState } from "react";
import { useEffect } from "react"


const MiApi = ({ mostrar, setMostrar, palabra, setPalabras }) => {

    const [game, setGame] = useState([]);
    const [contador, setContador] = useState();
    useEffect(() => {
        personajes();
    }, []);

    const personajes = async () => {
        setContador(2)
        const url = "https://api.rawg.io/api/games?key=53cdb1164b1f439ea262ce6365b3936e&dates=2019-09-01,2023-10-14&platforms=18,1,7";
        const res = await fetch(url);
        const data = await res.json();
        setGame(data.results)
        console.log("El contador esta en " + contador);

    }

    const siguiente = async () => {
        setContador(contador + 1)
        console.log("El contador esta en " + contador);
        setMostrar(true)
        const url = `https://api.rawg.io/api/games?dates=2019-09-01%2C2023-10-14&key=53cdb1164b1f439ea262ce6365b3936e&page=${contador}&platforms=18%2C1%2C7`;
        const res2 = await fetch(url);
        const data2 = await res2.json();
        setGame(data2.results)
        console.log(url);
        console.log("El contador despues esta en " + contador);
    }

    const atras = async () => {
        setContador(contador - 1)
        console.log("El contador esta en " + contador);
        if (contador > 2) {
            setMostrar(true)
            const url = `https://api.rawg.io/api/games?dates=2019-09-01%2C2023-10-14&key=53cdb1164b1f439ea262ce6365b3936e&page=${contador - 1}&platforms=18%2C1%2C7`;
            const res = await fetch(url);
            const data = await res.json();
            setGame(data.results)
            console.log(url);
            console.log(contador);
        } else {
            setContador(contador - 1)
            setMostrar(false)
            personajes()
        }


    }
    let resultado = '';
    if (!palabra) {
        resultado = game;
    } else {
        resultado = game.filter((item) => {
            return item.name.toLowerCase().includes(palabra.toLowerCase())
        })
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-3 pb-3" >
                {


                    resultado && resultado.length > 0 ? resultado?.map(juego => (

                        <div key={juego.id} className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={juego.background_image} className="card-img-top" alt="SuperHeroes de Marvel" />
                                <div className="card-body">
                                    <p className="card-text">{juego.name}</p>
                                </div>
                            </div>
                        </div>
                    )) : <p className="w-100 fs-1 text-light">No se encontraron coincidencias</p>
                }


            </div>
            <div className="row text-center row-cols-1 row-cols-md-2 row-cols-xl-2 g-4">
                <div className="col">
                    {
                        mostrar && < button onClick={atras} type="button" className="btn btn-primary g-3">Atras</button>
                    }
                </div>
                <div className="col">
                    <button onClick={siguiente} type="button" className="btn btn-primary g-3">Siguiente</button>
                </div>
            </div>
        </>
    )
}

export default MiApi