import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";

function Titulo(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  const listaCarros = props.carrosFavoritos.map((carro) => (
    <div className="flex justify-between items-center py-3 px-5 mt-5 bg-gray-200 rounded-2xl">
      <h3 className="text-xl font-semibold">{carro.modelo}</h3>
      <h3 className="text-xl font-semibold">R$ {(carro.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })} </h3>
    </div>
  ));

  function cardFavoritos() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  }

  return (
    <div>
      <header className="bg-[#2e2e2e] pr-10 flex justify-between">
        <Link to={"/"}>
          <img src="./logo.png" alt="logo" />
        </Link>
        <button
          onClick={onOpenModal}
          className="hidden bg-zinc-600 my-10 px-2 text-white rounded-2xl border-2 border-amber-500 tablet:block "
        >
          Favoritos
        </button>
      </header>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h1 className="text-center text-2xl font-semibold">Carros Favoritos</h1>
        {listaCarros}
      </Modal>
    </div>
  );
}

export default Titulo;
