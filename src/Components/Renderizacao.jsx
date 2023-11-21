function Renderizacao(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="bg-white w-9/12 flex flex-col items-center rounded-2xl shadow_image" >
        <img src={props.carro.imagem} alt="carro" className=" rounded-2xl shadow_image " />

        <div className="flex items-center gap-14 py-5">
          <h2 className="font-semibold text-xl">{props.carro.modelo}</h2>
          <p>{props.carro.subtitulo}</p>
        </div>

        <p className="text-3xl font-semibold">R$ {props.carro.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>

        <div className="flex items-center gap-14 my-5 ">
          <img src="./heart.png" className="cursor-pointer "/>
          <button className="bg-zinc-500 p-2 text-white rounded-xl">Financiamento</button>
          <p>{props.carro.ano}</p>
        </div>
      </section>
    </div>
  );
}

export default Renderizacao;
