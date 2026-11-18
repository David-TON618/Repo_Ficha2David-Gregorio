# Ficha 5

A aplicação da Ficha 5 parte da coleção criada na ficha anterior. O formulário permite acrescentar cartas e os dados são enviados para o servidor, que os guarda no ficheiro `cartas.json`.

## Como executar

Na pasta `server`, instala as dependências e inicia o servidor:

```bash
npm install
npm run dev
```

Na pasta `client`, instala as dependências e inicia o React:

```bash
npm install
npm run dev
```

O servidor fica em http://localhost:3000 e a aplicação React em http://localhost:5173.

## API

| Método | URL | O que recebe | Resposta |
|---|---|---|---|
| GET | `/api/cartas` | Não recebe dados. | `200 OK` com a lista de cartas em JSON. |
| POST | `/api/cartas` | Um JSON com `name`, `type` e `attack`. | `201 Created` com a carta criada ou `400 Bad Request` se faltar o nome ou o tipo. |
| DELETE | `/api/cartas/:id` | O ID da carta no URL. | `200 OK` se for apagada ou `404 Not Found` se não existir. |

## Pergunta 3

O primeiro pedido é o OPTIONS, enviado automaticamente pelo browser antes do POST. Serve para confirmar se o servidor permite pedidos entre origens diferentes. Sem o CORS, o browser bloqueia a comunicação e nem chega a enviar o POST. Por isso, o código da rota POST e o respetivo `console.log` não são executados.

## Pergunta 4

Com apenas `setCards`, a carta ficava no estado do React e desaparecia ao atualizar a página. Com o POST sem ficheiro, ficava no array em memória do servidor e desaparecia quando o servidor era reiniciado. Na versão final, fica guardada em `cartas.json`, mantendo-se mesmo depois de atualizar a página ou reiniciar o servidor.
