import Swal from "sweetalert2";

function Titulo(){

  function cardFavoritos(){
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  return (
    <div>
      <header className="bg-[#2e2e2e] pr-10 flex justify-between">
        <img src="./logo.png" alt="logo" />
        <button onClick={cardFavoritos} className="hidden bg-zinc-600 my-10 px-2 text-white rounded-2xl border-2 border-amber-500 tablet:block ">Favoritos</button>
      </header>
    </div>
  )
}

export default Titulo