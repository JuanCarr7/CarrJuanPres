/* eslint-disable react/prop-types */


export default function Pista(props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{props.numero}</h2>
    <p>{props.body}</p>
  </div>
</div>
  )
}
