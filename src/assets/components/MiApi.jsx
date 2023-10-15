import { useState } from "react";
import { useEffect } from "react"


const MiApi = ({ palabra }) => {

    const [game, setGame] = useState([]);
    const [next, setNext] = useState();
    const [prev, setPrev] = useState(null);

    useEffect(() => {
        personajes();
    }, []);

    const personajes = async () => {
        //setContador(2)
        const url = "https://api.rawg.io/api/games?key=53cdb1164b1f439ea262ce6365b3936e&dates=2019-09-01,2023-10-14&platforms=18,1,7";
        const res = await fetch(url);
        const data = await res.json();
        setNext(data.next);
        setPrev(data.previous)
        setGame(data.results);
    }

    const siguiente = async () => {
        const url = next;
        const res = await fetch(url);
        const data = await res.json();
        setNext(data.next);
        setGame(data.results)
        setPrev(data.previous)
    }

    const atras = async () => {
        const url = prev;
        const res = await fetch(url);
        const data = await res.json();
        setNext(data.next)
        setGame(data.results)
        setPrev(data.previous)

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
            <div className="row text-center row-cols-1 row-cols-md-2 row-cols-xl-2 g-4 mb-3 pb-3">
                <div className="col">
                    {
                        prev && < button onClick={atras} type="button" className="btn btn-primary g-3">Atras</button>
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