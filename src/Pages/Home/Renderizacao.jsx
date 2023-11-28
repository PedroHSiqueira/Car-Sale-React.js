import { useState } from "react";
import Swal from "sweetalert2";

function Renderizacao(props) {

  const [favoritoIcone, setFavoritoIcone] = useState("./heart.png");

  function alterarIcone(){
    if(favoritoIcone === "./heart.png"){
      setFavoritoIcone("./heart2.png");
    }else{
      setFavoritoIcone("./heart.png");
    }
  }

  function favoritos(){
    if(favoritoIcone === "./heart2.png"){
      props.removerFavoritos(props.carro.modelo, props.carro.preco);
      Swal.fire({
        title: "O veiculo foi removido dos Favoritos!",
        icon: "error"
      });
      return;
    }

    props.salvarFavoritos(props.carro.modelo, props.carro.preco);
    Swal.fire({
      title: "O veiculo foi adicionado aos Favoritos!",
      icon: "success"
    });
  }

  function cardFinanciamento(props){
    Swal.fire({
      width: 500,
      title: `Financiamento do <br> ${props.carro.modelo}`,
      imageUrl: props.carro.interior,
      imageWidth: 500,
      imageHeight: 350,
      text: `Pode ser seu Apartir de 24x de R$${(props.carro.preco / 24).toLocaleString("pt-br", { minimumFractionDigits: 2 })} `,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="bg-slate-100 w-11/12 flex flex-col items-center rounded-2xl shadow_image" >
        <img src={props.carro.imagem} alt="carro" className=" rounded-2xl shadow_image " />

        <div className="flex items-center gap-14 py-5 px-2">
          <h2 className="text-sm font-semibold mobile:text-base Ltablet:text-xl">{props.carro.modelo}</h2>
          <p className="text-xs mobile:text-sm Ltablet:text-lg">{props.carro.subtitulo}</p>
        </div>

        <p className="text-xl font-semibold Ltablet:text-2xl desktop:text-3xl">R$ {props.carro.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>

        <div className="flex items-center gap-14 my-5 ">
          <img src={favoritoIcone} className="cursor-pointer " onClick={() => {
            alterarIcone();
            favoritos();
          }}/>
          <button className="bg-zinc-600 p-2 text-slate-50 border-2 border-amber-500 rounded-xl" onClick={() => cardFinanciamento(props)}>Financiamento</button>
          <p className="hidden Ltablet:block ">{props.carro.ano}</p>
        </div>
      </section>
    </div>
  );
}

export default Renderizacao;
