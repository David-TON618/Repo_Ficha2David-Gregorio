import { useState } from "react";
import Card from "./Card.jsx";

const initialCards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Rito de Ferro", type: "Feitiço", attack: 0, defense: 0 },
  { name: "Sentinela de Âmbar", type: "Criatura", attack: 6, defense: 6 },
  { name: "Eco do Vazio", type: "Feitiço", attack: 0, defense: 0 },
];

function App() {
  const [cards, setCards] = useState(initialCards);
  const [filter, setFilter] = useState("Todas");
  const [search, setSearch] = useState("");
  const [randomCard, setRandomCard] = useState(null);
  const [sorted, setSorted] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [attack, setAttack] = useState("");

  let visible = cards
    .filter((card) => filter === "Todas" || card.type === filter)
    .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));

  if (sorted) visible = [...visible].sort((a, b) => b.attack - a.attack);

  function handleSubmit(event) {
    event.preventDefault();
    const card = { name: name.trim(), type, attack: Number(attack), defense: 0 };
    setCards([...cards, card]);
    setName("");
    setType("");
    setAttack("");
  }

  function pickRandom() {
    if (cards.length) setRandomCard(cards[Math.floor(Math.random() * cards.length)]);
  }

  return (
    <main>
      <h1>A minha coleção</h1>
      <p>Tenho {cards.length} cartas · a mostrar {visible.length}</p>
      <section>
        <h2>Adicionar carta</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome<input value={name} onChange={(event) => setName(event.target.value)} /></label>
          <label>Tipo
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="">Selecionar tipo</option>
              <option value="Criatura">Criatura</option>
              <option value="Feitiço">Feitiço</option>
            </select>
          </label>
          <label>Ataque<input type="number" min="0" value={attack} onChange={(event) => setAttack(event.target.value)} /></label>
          <button type="submit">Adicionar carta</button>
        </form>
      </section>
      <div>
        <button onClick={() => setFilter("Todas")}>Todas</button>
        <button onClick={() => setFilter("Criatura")}>Só criaturas</button>
        <button onClick={() => setFilter("Feitiço")}>Só feitiços</button>
        <button onClick={() => setSorted(!sorted)}>{sorted ? "Ordem original" : "Ordenar por ataque"}</button>
      </div>
      <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Procurar pelo nome…" />
      {visible.length === 0 ? <p>Nenhuma carta corresponde.</p> : <ul>{visible.map((card, index) => <Card key={card.name + index} {...card} />)}</ul>}
      <h2>Carta à sorte</h2>
      <button onClick={pickRandom}>Escolher outra</button>
      {randomCard && <p><b>{randomCard.name}</b> — {randomCard.type} · ataque {randomCard.attack} · defesa {randomCard.defense}</p>}
    </main>
  );
}

export default App;
