const http = require("http");

const PORT = 3000;

 

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Gian, o Imigrante", type: "Imigrante", attack: 0.3, defense: 0 },
  { name: "Santos, O Gordo", type: "Baleia", attack: -6, defense: 100 },
  { name: "Mestre do Roblox, Alexandru", type: "Discord Mod", attack: 7, defense: -67 },
  
];



const items = cards.map(card => `<li>Number: Name:${card.name}   Type:${card.type}   Attack:${card.attack}   Defense:${card.defense}</li>`).join("");
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);



  let count = cards.length

  
  if (req.url === "/") {
  
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1> Site sobre o gian feito pelo David<h1> " + "<p>O gian não tem direitos mas tem " + count + " cartas apesar de ser pobre < p>");


  return;
}

else if (req.url === "/sobre") {
  
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>David<h1>");
  return;
}

else if (req.url === "/cartas") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  
    res.end("<ul>" + items + "<ul>");
  return;
}

else if (req.url === "/cartas/aleatoria") {
      
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const card = cards[Math.floor(Math.random() * cards.length)];
      
    res.end("<ul>" + "  Name: " + card.name   + " Type: " + card.type  +"  Attack: " + card.attack  + " Defense: " + card.defense + "<ul>");
  return;
}


else if (req.url === "/agora") {
  
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const now = new Date().toLocaleString("pt-PT");
    res.end(now)
  return;
}

else if (req.url === "/batatas") {
  
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("ERRO 404");
  return;
}

  res.end()
});


server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
 
