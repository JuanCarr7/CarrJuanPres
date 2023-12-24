

export default function Anuncio() {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/412321265_7188747324479967_924092708713802123_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGGFKbUqddaaoeUeeDS_y13em5t-uE0vgt6bm364TS-C7h2FJfNel_edMKl5wnEanU&_nc_ohc=5346-TDgTnoAX-ifaeB&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAig2iYEXygsvEeMW2hBMOpq3mWPqrSujP-mn_F81WqCQ&oe=658D47F6"
          alt="Porton"
          className="h-[400px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Vendo porton ya!</h2>
        <div>
        <p>Hola! Vendo Portón con marco de madera Cedro.</p>
        <p>Ancho: 2,40m</p>
        <p>Alto: 2,10m</p>
        <p>Precio: $490.000</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Compre ahora!</button>
        </div>
      </div>
    </div>
  )
}
