# Desafio Nginx com Node.js e MySQL — Full Cycle

Este repositório contém a solução do desafio do módulo Docker do curso Full Cycle, onde devemos utilizar o **Nginx como reverse proxy**, uma aplicação **Node.js** e um banco **MySQL**.

Ao acessar o Nginx (porta 8080), ele deve redirecionar a requisição para a aplicação Node.js.  
A aplicação insere um nome no banco e retorna:

```bash
    <h1>Full Cycle Rocks!</h1> - Lista de nomes cadastrada no banco de dados. ```
```

## Como executar o projeto

Com Docker e Docker Compose instalados, basta rodar:
```bash
    docker-compose up -d --build
```

Depois acesse:
```bash
    http://localhost:8080
```

Você verá:
```bash
    Full Cycle Rocks!
    - Kamila Pantoja
    - Kamila Pantoja
    - Kamila Pantoja
```

Cada requisição insere um novo registro no MySQL.

Para desligar tudo:
```bash
   docker-compose down -v
```