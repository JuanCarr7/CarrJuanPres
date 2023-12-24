import Anuncio from "../components/Anuncio";
import Pista from "../components/Pista";


export default function Pistas() {
  const pistas =[
    { key: 1, numero: "Pista 1", body: "Me gusta la tecnología pero no tengo un mango partido al medio." },
    { key: 2, numero: "Pista 2", body: "Soy una mujer" },
    { key: 3, numero: "Pista 3", body: "Me gusta jugar a la play 5" },
    { key: 4, numero: "Pista 4", body: "Soy de los que no viven en Hernando" },
    { key: 5, numero: "Pista 5", body: "Juego/jugaba al básquet y mi número es el 7" },
    { key: 6, numero: "Pista 6", body: "Soy la que mas ayuda en la familia." },
  ];

  
    return (
    <section>
        <div>
            <ul className="flex flex-wrap gap-3 justify-center">
                {pistas.map((pista) => <Pista key={pista.key} body={pista.body} numero={pista.numero} />)}
            </ul>
        </div>
        <div className="flex justify-center items-center w-100 m-10">
            <Anuncio />
        </div>
    </section>
  )
}
