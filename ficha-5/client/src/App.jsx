import { useEffect, useState } from "react";
import Card from "./Card.jsx";

const API_URL = "http://localhost:3000/api/cartas";

function App() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("Todas");
  const [search, setSearch] = useState("");
  const [randomCard, setRandomCard] = useState(null);
  const [sorted, setSorted] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [attack, setAttack] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => setCards(data))
      .catch(() => setFormError("Não foi possível carregar as cartas. Confirma se o servidor está ligado."));
  }, []);

  let visible = cards
    .filter((card) => filter === "Todas" || card.type === filter)
    .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));

  if (sorted) visible = [...visible].sort((a, b) => b.attack - a.attack);

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, type, attack: Number(attack) }),
      });
      const data = await response.json();
      if (!response.ok) {
        setFormError(`HTTP ${response.status}${data.error ? ` — ${data.error}` : ""}`);
        return;
      }
      setCards([...cards, data]);
      setName("");
      setType("");
      setAttack("");
    } catch {
      setFormError("Não foi possível contactar o servidor.");
    }
  }

  async function handleDelete(id) {
    setFormError("");
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setCards((currentCards) => currentCards.filter((card) => card.id !== id));
      if (randomCard?.id === id) setRandomCard(null);
    } catch {
      setFormError("Não foi possível apagar a carta.");
    }
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
        {formError && <p className="form-error">{formError}</p>}
      </section>
      <div>
        <button onClick={() => setFilter("Todas")}>Todas</button>
        <button onClick={() => setFilter("Criatura")}>Só criaturas</button>
        <button onClick={() => setFilter("Feitiço")}>Só feitiços</button>
        <button onClick={() => setSorted(!sorted)}>{sorted ? "Ordem original" : "Ordenar por ataque"}</button>
      </div>
      <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Procurar pelo nome…" />
      {visible.length === 0 ? <p>Nenhuma carta corresponde.</p> : <ul>{visible.map((card) => <Card key={card.id} {...card} onDelete={handleDelete} />)}</ul>}
      <h2>Carta à sorte</h2>
      <button onClick={pickRandom}>Escolher outra</button>
      {randomCard && <p><b>{randomCard.name}</b> — {randomCard.type} · ataque {randomCard.attack} · defesa {randomCard.defense}</p>}
    </main>
  );
}

export default App;
