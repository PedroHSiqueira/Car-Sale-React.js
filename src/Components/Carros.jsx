import { useEffect, useState } from "react"
import { dados } from "../../public/carros"
import Renderizacao from "./Renderizacao"


function Carros(props) {
  const [carros, setCarros] = useState([])

  useEffect(() => {
    setCarros(dados)
  }, [])

  const listaCarros = carros.map(carro => (
    <Renderizacao
      key={carro.id}
      carro={carro}
    />
  ))

  return (
    <div className="bg-gray-300 pb-10">
      <h3 className="text-xl font-bold text-center py-10 Ltablet:text-2xl ">Melhores Carros Disponiveis Para Se Compra Agora</h3>
      <div className="grid grid-cols-1 Ltablet:grid-cols-2 desktop:grid-cols-3  mx-10 gap-14">
        {listaCarros}
      </div>
    </div>
  )
}

export default Carros