function Card({ name, attack, type, defense }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Ataque: {attack}</p>
      <p>Defesa: {defense}</p>
      <p>Tipo: {type}</p>
      {attack >= 6 && (<p><strong>Carta Forte!!</strong></p>)}
    </div>
  )
}

export default Card