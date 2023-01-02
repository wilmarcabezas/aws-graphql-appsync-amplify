/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      description
      price
      author
      createdAt
      updatedAt
      orderBooksId
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $id: ID
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBooks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        description
        price
        author
        createdAt
        updatedAt
        orderBooksId
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      books {
        items {
          id
          description
          price
          author
          createdAt
          updatedAt
          orderBooksId
        }
        nextToken
      }
      total
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        books {
          nextToken
        }
        total
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
