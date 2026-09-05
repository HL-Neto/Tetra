# 📊 Tetra

Dashboard de visualização de dados em tempo real, desenvolvido com **Next.js, React, TypeScript, Python e WebSocket**.

O projeto foi desenvolvido com o objetivo de explorar a comunicação entre **frontend e backend em tempo real**, utilizando WebSockets para transmitir dados e **Chart.js** para sua representação visual.

## 🚀 Sobre o projeto

O Tetra possui uma arquitetura dividida em duas partes:

```text
┌──────────────────┐
│     Frontend     │
│  Next.js / React │
└────────┬─────────┘
         │
         │ WebSocket
         ▼
┌──────────────────┐
│      Backend     │
│      Python      │
└────────┬─────────┘
         │
         ▼
   Dados de vendas
```

O backend gera dados de vendas e os disponibiliza através de um servidor WebSocket.

O frontend estabelece a comunicação com esse servidor e utiliza os dados recebidos para alimentar a interface e os gráficos.

---

## ✨ Funcionalidades

* 📊 Dashboard para visualização de dados
* ⚡ Comunicação em tempo real através de WebSocket
* 📈 Visualização de dados utilizando gráficos
* 🐍 Backend desenvolvido em Python
* ⚛️ Interface desenvolvida com React
* ▲ Aplicação baseada em Next.js
* 📦 Separação entre frontend e backend

---

## 🛠️ Tecnologias

### Frontend

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **Chart.js**
* **React Chart.js 2**
* **Lucide React**

As dependências e versões utilizadas estão definidas no `package.json` do frontend.

### Backend

* **Python**
* **WebSockets**
* **Asyncio**
* **JSON**

O backend utiliza `websockets` e `asyncio` para manter o servidor de comunicação em tempo real.

---

## 📂 Estrutura do projeto

```text
Tetra/
│
├── back/
│   ├── data.py
│   └── socket_server.py
│
├── front/
│   ├── app/
│   │   ├── dashboard/
│   │   ├── data/
│   │   ├── hero/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── eslint.config.mjs
│
└── README.md
```

A estrutura atual do repositório contém os diretórios `back` e `front`, com o frontend organizado através do App Router do Next.js.

---

# ⚙️ Instalação

## 1. Clone o repositório

```bash
git clone https://github.com/HL-Neto/Tetra.git
```

Entre no projeto:

```bash
cd Tetra
```

---

# 🐍 Executando o Backend

Entre na pasta:

```bash
cd back
```

Instale a dependência necessária:

```bash
pip install websockets
```

Execute o servidor:

```bash
python socket_server.py
```

O servidor será iniciado em:

```text
ws://localhost:8000
```

O backend mantém a conexão WebSocket aberta e envia novos dados periodicamente. Atualmente, os dados são gerados de forma aleatória para fins de demonstração.

---

# ⚛️ Executando o Frontend

Abra outro terminal e entre na pasta:

```bash
cd front
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

O frontend utiliza Next.js e possui scripts para desenvolvimento, build, execução em produção e lint.

---

# 🔄 Comunicação em tempo real

O backend utiliza um servidor WebSocket:

```python
websockets.serve(socket, "localhost", 8000)
```

Após estabelecer a conexão, os dados são enviados periodicamente:

```python
await websocket.send(data_json)
```

Atualmente existe um intervalo de aproximadamente **3 segundos** entre os envios:

```python
await asyncio.sleep(3)
```

Isso permite que o frontend receba novas informações sem precisar realizar requisições HTTP constantemente.

---

# 📊 Geração dos dados

Os dados utilizados atualmente são simulados para representar informações de vendas.

O backend gera valores aleatórios e os transforma em JSON:

```python
{
    "data": [
        4,
        8,
        2
    ]
}
```

A função responsável pela geração está localizada em:

```text
back/data.py
```

Essa abordagem permite testar a comunicação em tempo real e a atualização da interface sem depender inicialmente de uma base de dados real.

---

# 🧠 Conceitos praticados

Este projeto foi desenvolvido para praticar conceitos como:

* WebSockets
* Comunicação bidirecional
* Comunicação em tempo real
* Arquitetura Frontend/Backend
* React
* Next.js
* TypeScript
* Python assíncrono
* JSON
* Visualização de dados
* Gráficos
* Integração entre diferentes tecnologias

---

# 🔮 Próximas melhorias

Algumas possíveis evoluções para o projeto:

* [ ] Substituir os dados aleatórios por dados reais
* [ ] Adicionar banco de dados
* [ ] Criar API REST para operações tradicionais
* [ ] Implementar autenticação
* [ ] Adicionar filtros no dashboard
* [ ] Criar diferentes métricas de vendas
* [ ] Adicionar gráficos adicionais
* [ ] Melhorar tratamento de desconexões WebSocket
* [ ] Implementar reconexão automática
* [ ] Criar ambiente de produção
* [ ] Containerizar frontend e backend com Docker
* [ ] Adicionar testes automatizados

---

# 🎯 Objetivo

O Tetra é principalmente um projeto de estudo e experimentação voltado para **comunicação em tempo real e visualização de dados**.

A aplicação demonstra como um backend Python pode gerar e transmitir informações continuamente para uma aplicação React/Next.js através de WebSockets.

---

## 👨‍💻 Autor

**Humberto Luna**

GitHub: [HL-Neto](https://github.com/HL-Neto)

---

## 📄 Licença

Este projeto está disponível para fins de estudo e desenvolvimento.
