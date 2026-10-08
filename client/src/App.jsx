import Card from './Card'

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Gian, o Imigrante", type: "Imigrante", attack: 400, defense: 0 },
  { name: "Santos, O Gordo", type: "Baleia", attack: -6, defense: 100 },
  { name: "Mestre do Roblox, Alexandru", type: "Discord Mod", attack: 7, defense: -67 },
]

function App() {
  return (
    <div>
      <h1>Eu tenho {cards.length} cartas!</h1>
      {cards.map(card => (
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