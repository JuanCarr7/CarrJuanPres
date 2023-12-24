import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Pistas from "./screens/Pistas"


function App() {
  

  return (
    <>
        <Navbar/>
        <div className="flex justify-center items-center m-3 ">
          <h1 className="text-neutral-50"> < a className="underline decoration-sky-500">Hola lore, como estas?</a> soy tu  <a className="text-neutral-50/25">amigo invisible</a> este año. Espero me descubras y te guste el regalo🎁, cualquier cosa se puede cambiar en azalea jaja!</h1>
        </div>
        <div  className="flex justify-center items-center mt-10">
          <h1>Aqui te dejo mis pistas, algunas son mentira:</h1>
        </div>
        <Pistas/>
        <Footer/>
    </>
  )
}

export default App
