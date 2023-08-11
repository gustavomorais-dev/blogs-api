# Blogs API

Uma API RESTful e um banco de dados utilizando arquitetura de software em camadas de um CRUD de um back-end de um Blog, em que será possível criar, visualizar, deletar e atualizar posts e usuários.

Foram utilizados a ORM Sequelize e o JWT para geração de tokens.

## Começando

Para testar a aplicação localmente, clone o repositório e siga os seguintes passos:

Obs: Garanta que tenha o docker e o docker-compose instalados no seu sistema.

1. **Início rápido com docker no terminal:**

```
$ docker-compose up -d --build
```

2. **Acesse o terminal do container:**

```
$ docker exec -it blogs_api bash
```

3. **No terminal do container, inicie a aplicação:**

```
$ npm run dev
```

4. **A partir do seu client de requisições HTTP (como o Thunder Client, extensão do vscode), explore os endpoints possíveis para a aplicação :**

- Solicitação de login:
```
POST http://localhost:3001/login/
```

    > O corpo da requisição deve ter a seguinte estrutura:
    {
      "email": "lewishamilton@gmail.com",
      "password": "123456"
    }

- Solicitação de criação de novo usuário:
```
POST http://localhost:3001/user/
```

    > O corpo da requisição deve ter a seguinte estrutura:
    {
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      // a imagem não é obrigatória
    }

⚠️ Guarde o seu token gerado no login/criação de usuário, pois ele será necessário para as requisições marcadas com "🔒". O token deve ser informado no campo "Auth/Bearer" da requisição.

- 🔒 Retorna todos os usuários cadastrados

```
GET http://localhost:3001/user/
```

- 🔒 Retorna um usuário de acordo com o id da rota (substitua 'id' por um id numérico):
```
GET http://localhost:3001/user/id
```

- 🔒 Solicitação de criação de nova categoria:
```
POST http://localhost:3001/categories/
```

    > O corpo da requisição deve ter a seguinte estrutura:
    {
      "name": "Typescript"
    }
    
- 🔒 Retorna todas as categorias cadastradas

```
GET http://localhost:3001/categories/
```

- 🔒 Solicitação de criação de novo post no blog:
```
POST http://localhost:3001/post/
```

    > O corpo da requisição deve ter a seguinte estrutura:
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    }

- 🔒 Retorna todos os posts cadastrados

```
GET http://localhost:3001/post/
```

- 🔒 Retorna um post de acordo com o id da rota (substitua 'id' por um id numérico):
```
GET http://localhost:3001/post/id
```

- 🔒 Atualiza um post de acordo com o id (substitua id por um id numérico):
```
PUT http://localhost:3001/post/id
```

    > O corpo da requisição deve ter a seguinte estrutura:
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key"
    }

- 🔒 Deleta um post de acordo com o id (substitua 'id' por um id numérico):
```
DELETE http://localhost:3001/post/id
```

- 🔒 Procura por um post com um termo de busca, retornando posts que tenham o termo no título ou conteúdo (substitua 'searchTerm' pelo termo de busca):
```
GET http://localhost:3001/post/search?q=searchTerm
```

- 🔒 Deleta o SEU usuário do banco de dados:
```
DELETE http://localhost:3001/user/me
```



