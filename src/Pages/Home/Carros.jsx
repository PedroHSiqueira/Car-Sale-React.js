import { useEffect, useState } from "react";
import { dados } from "../../../public/carros";
import Renderizacao from "./Renderizacao";
import { Link } from "react-router-dom";

function Carros(props) {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    setCarros(dados);
  }, []);

  const listaCarros = carros.map((carro) => (
    <Renderizacao key={carro.id} carro={carro} salvarFavoritos={props.salvarFavoritos} removerFavoritos={props.removerFavoritos} />
  ));

  return (
    <div className="bg-gray-300 pb-10">
      <h3 className="text-xl font-semibold text-center py-10 Ltablet:text-2xl ">
        Melhores Carros Disponiveis Para Se Compra Agora
      </h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3  mx-10 gap-14">
        {listaCarros}
      </div>

      <div className=" mt-7 flex justify-center items-center gap-5">
        <Link to={"/"}>
          <img src="./seletor1.png" />
        </Link>
        <Link to={"/page2"}>
          <img src="./seletor2.png" />
        </Link>
      </div>
    </div>
  );
}

export default Carros;
