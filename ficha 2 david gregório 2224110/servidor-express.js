const express = require("express");
const app = express();
const port = 3000
const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Gian, o Imigrante", type: "Imigrante", attack: 0.3, defense: 0 },
  { name: "Santos, O Gordo", type: "Baleia", attack: -6, defense: 100 },
  { name: "Mestre do Roblox, Alexandru", type: "Discord Mod", attack: 7, defense: -67 },
  
];
const items = cards.map(card => `<li>Number: Name:${card.name}   Type:${card.type}   Attack:${card.attack}   Defense:${card.defense}</li>`)


app.get("/", (req, res) => {
  
  console.log(`${req.method} ${req.url}`);
  let count = cards.length
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1> Site sobre o gian feito pelo David<h1> " + "<p>O gian não tem direitos mas tem " + count + " cartas apesar de ser pobre <p>");

});

app.get("/sobre", (req, res) => {
  
  console.log(`${req.method} ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>David<h1>");

});

app.get("/cartas", (req, res) => {
  console.log(`${req.method} ${req.url}`);
   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  
    res.end("<ul>" + items + "<ul>");
});

app.get("/cartas/aleatoria", (req, res) => {
  console.log(`${req.method} ${req.url}`);
   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const card = cards[Math.floor(Math.random() * cards.length)];
      
    res.end("<ul>" + "  Name: " + card.name   + "  Type: " + card.type  +"  Attack: " + card.attack  + "  Defense: " + card.defense + "<ul>");
  
});

app.get("/agora", (req, res) => {
  console.log(`${req.method} ${req.url}`);
   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const now = new Date().toLocaleString("pt-PT");
    res.end(now)
  
});





app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(3000, () => console.log("http://localhost:3000"));