import { useState } from 'react'

function Card({ name, attack, type, defense }) {
  const [likes, setLikes] = useState(0)

  return (
    <div className="card">
      <h3>{name}</h3>
      {attack >= 6 && <span>forte</span>}
      <p>Tipo: {type}</p>
      <p>Ataque: {attack}</p>
      <p>Defesa: {defense}</p>
      <button onClick={() => setLikes(likes + 1)}>♥ {likes}</button>
    </div>
  )
}

export default Card