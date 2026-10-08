import { useState } from 'react'
import Card from './Card'

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Gian, o Imigrante", type: "Imigrante", attack: 400, defense: 0 },
  { name: "Santos, O Gordo", type: "Baleia", attack: -6, defense: 100 },
  { name: "Mestre do Roblox, Alexandru", type: "Discord Mod", attack: 7, defense: -67 },
]

function App() {

  const [filter, setFilter] = useState('todas')

  const visible = cards.filter(card => {
    if (filter === 'todas') return true
    return card.type === filter
  })


  return (
    <div>
      <h1>Eu tenho {cards.length} cartas e {visible.length} à vista!</h1>
      <button onClick={() => setFilter('todas')}>Todas</button>
      <button onClick={() => setFilter('Criatura')}>Criaturas</button>
      <button onClick={() => setFilter('Imigrante')}>Imigrantes</button>
      <button onClick={() => setFilter('Discord Mod')}>Discord Mods</button>
      <button onClick={() => setFilter('Baleia')}>Baleias</button>
      {visible.map(card => (
        <Card
          key={card.name}
          name={card.name}
          attack={card.attack}
          type={card.type}
          defense={card.defense}
        />
      ))}
    </div>
  )
}

export default App