
function Titulo(){
  return (
    <div>
      <header className="bg-[#2e2e2e] pr-10 flex justify-between">
        <img src="./logo.png" alt="logo" />
        <button className="hidden bg-zinc-600 my-10 px-2 text-white rounded-2xl tablet:block ">Favoritos</button>
      </header>
    </div>
  )
}

export default Titulo