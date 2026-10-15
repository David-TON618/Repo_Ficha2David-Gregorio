## Executar a aplicação React

No terminal, executa os seguintes comandos:

```bash
cd client
npm install
npm run dev


## 3. Onde é construído o HTML?

Acrescenta esta resposta ao README, em português:

<WritingBlock id="58314" variant="standard">No site Express (porta 3000), o HTML é construído no servidor e enviado ao browser já preparado para apresentar a página. No React (porta 5173), o servidor envia inicialmente um HTML base, e o JavaScript do React constrói a interface no browser. Podemos confirmar esta diferença através do View Source: o Express apresenta o conteúdo da página, enquanto o React apresenta sobretudo a estrutura base e os ficheiros JavaScript.</WritingBlock>

## 4. Diferença no separador Network

<WritingBlock id="58315" variant="standard">No Express, filtrar cartas ou mudar de página normalmente provoca um novo pedido ao servidor, que devolve o HTML atualizado. No React, estas operações são geralmente realizadas no próprio browser, sem recarregar a página nem fazer novos pedidos HTTP. Por isso, o Express tende a fazer mais pedidos durante a navegação, enquanto o React reutiliza a página carregada inicialmente. O número exato de pedidos deve ser confirmado no separador Network, pois depende da implementação.</WritingBlock>

## 5. Enviar para o GitHub

No terminal, a partir da pasta principal do projeto, executa:

```bash
git status
git add README.md client/
git commit -m "Document React setup and comparison"
git push
