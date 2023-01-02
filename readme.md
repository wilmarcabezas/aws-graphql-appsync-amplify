# AWS GraphQL AppSync Amplify

Este repositorio contiene una aplicación de ejemplo que muestra cómo utilizar AWS AppSync junto con Amplify para construir una aplicación basada en GraphQL. 

## Requisitos previos

- Node.js >= 10.x
- Una cuenta de AWS con acceso a AWS AppSync y Amplify
- Amplify CLI instalada: `npm install -g @aws-amplify/cli`

## Iniciando

1. Clona este repositorio en tu equipo: `git clone https://github.com/wilmarcabezas/aws-graphql-appsync-amplify.git`
2. Entra en la carpeta del proyecto: `cd aws-graphql-appsync-amplify`
3. Instala las dependencias: `npm install`
4. Inicia el proyecto de Amplify: `amplify init`
5. Sube tus cambios a la nube: `amplify push`

## 🚀 Despliegue

Una vez que se completen los pasos anteriores, la aplicación debería estar disponible en línea a través de la URL proporcionada por Amplify.

## 📚 Documentación

- [AWS AppSync](https://aws.amazon.com/es/appsync/)
- [AWS Amplify](https://aws.amazon.com/es/amplify/)
- [GraphQL](https://graphql.org/)
- [React](https://es.reactjs.org/)


# Esquemas Proyecto

## Tipo `Book`

Este tipo representa un libro.

```graphql
type Book @model @auth(
  rules: [
  { allow: groups, groups: [ "admin" ] },
  { allow: groups, groups: [ "user" ], operations: [ read ] }
  ]) {
  id: ID! @primaryKey
  description: String
  price: Float!
  author: String!
}
```

### Atributos

* id: ID único del libro.
* description: Descripción del libro.
* price: Precio del libro.
* author: Autor del libro.


### Anotaciones

* @model: Indica que este tipo es un modelo de base de datos.
* @auth: Especifica las reglas de autenticación para este tipo. En este caso, solo los usuarios pertenecientes a los grupos admin o user pueden acceder a la lectura de los libros.

##Tipo Order

Este tipo representa una orden de compra de libros.

```graphql
type Order @model{
  id: ID!
  books: [Book] @hasMany
  total: Float!
}
```

### Atributos

* id: ID único de la orden.
* books: Lista de libros incluidos en la orden.
* total: Precio total de la orden.


### Anotaciones

* @model: Indica que este tipo es un modelo de base de datos.
* @hasMany: Indica que la relación entre la orden y los libros es de muchos a muchos.


