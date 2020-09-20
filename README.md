# MoviesAPI

Aplicação Node.js com dados de amostra carregados no cluster free tier disponível no MongoDB Atlas.

## Requirements

-   Node.js v12+
-   MongoDB Atlas account
-   Docker Engine

## Environment Variables

-   SERVER_PORT
-   DB_USER
-   DB_PASS
-   DB_HOST
-   DB_NAME

## Running

Após o projeto ter sido baixado, basta acessar o diretório onde se encontra e executar o comando abaixo para instalar todas dependências necessárias e subir a aplicação.

```sh
make up
```

Isso irá criar a imagem Node com as dependências necessárias com base no que foi configurado dentro do nosso arquivo Dockerfile. Por padrão, o Docker vai expor a porta 3000, caso necessário basta alterar.

Verifique se funcionou corretamente navegando até o endereço do servidor no navegador preferido

```sh
127.0.0.1:3000/api
```

ou

```sh
localhost:3000/api
```

Para ter acesso ao console dos containers que estão sendo executados, basta utilizar o comando abaixo e será possível visulizar todos logs dos mesmos:

```sh
make logs
```

Caso deseje parar a aplicação o comando abaixo deve ser executado:

```sh
make down
```

Todos os comandos utilizados acima foram configurados dentro do arquivo `Makefile`, caso necessário basta ajusta-lo.

## Resources

-   [Connect to a MongoDB Database Using Node.js](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database)
-   [MongoDB Quick Start](https://github.com/mongodb-developer/nodejs-quickstart)
-   [Load Sample Data into Your Atlas Cluster](https://docs.atlas.mongodb.com/sample-data/)
-   [Prettier](https://prettier.io/docs/en/install.html)
-   [ESLint](https://eslint.org/docs/user-guide/getting-started)
-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://github.com/docker/compose)
