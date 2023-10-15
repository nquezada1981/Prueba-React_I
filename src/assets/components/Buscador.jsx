

const Buscador = ({ palabra, setPalabra }) => {


    return (
        <form className="row row-cols-1 row-cols-md-2 row-cols-xl-6 g-4 mb-3 pb-3">
            {/* <label htmlFor="search" className="form-label text-light">Busca un juego</label> */}
            <input type="text"
                className="form-control w-50"
                placeholder="Ingrese el nombre del juego"
                value={palabra}
                onChange={(e) => { setPalabra(e.target.value) }} />
        </form >
    )
}

export default Buscador