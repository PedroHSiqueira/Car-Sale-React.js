import { useEffect, useState } from "react";
import Rodape from "../Components/Rodape";
import Titulo from "../Components/Titulo";
import Carros2 from "./page2/Carros2";

function CarPage2() {
  const [carrosFavoritos, setCarrosFavoritos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("carros")) {
      const carros = JSON.parse(localStorage.getItem("carros"));
      setCarrosFavoritos(carros);
    }
  }, []);

  function removerFavoritos(modelo) {
    const carros2 = carrosFavoritos.filter((carro) => carro.modelo !== modelo);
    setCarrosFavoritos(carros2);
    localStorage.setItem("carros", JSON.stringify(carros2));
  }

  function salvarFavoritos(modelo, preco) {
    const carros2 = [...carrosFavoritos];
    carros2.push({ modelo, preco });
    setCarrosFavoritos(carros2);
    localStorage.setItem("carros", JSON.stringify(carros2));
  }
  return (
    <div>
      <Titulo carrosFavoritos={carrosFavoritos} />
      <Carros2 salvarFavoritos={salvarFavoritos} removerFavoritos={removerFavoritos} />
      <Rodape />
    </div>
  );
}

export default CarPage2;
