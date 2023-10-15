
import { useState } from "react"
import MiApi from "./assets/components/MiApi"
import Buscador from "./assets/components/Buscador";



const App = () => {

  const [palabra, setPalabra] = useState("")


  return (
    <div className="container mt-3 pt-3 text-center">
      <h1 className="mb-5 pb-5 text-light">API VideoJuegos</h1>
      <Buscador palabra={palabra} setPalabra={setPalabra} />
      <MiApi palabra={palabra} setPalabra={setPalabra} />

    </div>
  )
}

export default App