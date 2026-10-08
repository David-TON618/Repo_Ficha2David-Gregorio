function Card({ name, attack, type }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Ataque: {attack}</p>
      <p>Tipo: {type}</p>
    </div>
  )
}

export default Card