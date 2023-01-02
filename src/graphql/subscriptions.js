/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
