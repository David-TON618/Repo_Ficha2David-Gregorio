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
  const [search, setSearch] = useState('')
  const [lucky, setLucky] = useState(null)
  const [sorted, setSorted] = useState(false)

  function pickRandom() {
    const index = Math.floor(Math.random() * cards.length)
    setLucky(cards[index])
  }

  function chooseFilter(type) {
    setFilter(type)
    setLucky(null)
  }

  const filtered = lucky
    ? [lucky]
    : cards
        .filter(card => filter === 'todas' || card.type === filter)
        .filter(card => card.name.toLowerCase().includes(search.toLowerCase()))

  const visible = sorted
    ? [...filtered].sort((a, b) => b.attack - a.attack)
    : filtered

  return (
    <div>
      <h1>Eu tenho {cards.length} cartas e {visible.length} à vista!</h1>

      <input
        value={search}
        onChange={e => { setSearch(e.target.value); setLucky(null) }}
        placeholder="Pesquisar"
      />

      <button onClick={() => chooseFilter('todas')}>Todas</button>
      <button onClick={() => chooseFilter('Criatura')}>Criaturas</button>
      <button onClick={() => chooseFilter('Imigrante')}>Imigrantes</button>
      <button onClick={() => chooseFilter('Discord Mod')}>Discord Mods</button>
      <button onClick={() => chooseFilter('Baleia')}>Baleias</button>
      <button onClick={pickRandom}>Sorte</button>
      <button onClick={() => setSorted(!sorted)}>
        {sorted ? 'Ordem original' : 'Ordenar por ataque'}
      </button>

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