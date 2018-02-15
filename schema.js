export default `
    type Query {
        board(_id: String!): Board
        boards: [Board]
        todo(_id: String!): Todo
    }

    type Board {
        _id: String!
        title: String!
        todos: [Todo]
    }

    type Todo {
        _id: String!
        boardId: String!
        title: String!
        description: String!
    }

    type Mutation {
        createBoard(title: String!): Board!
        createTodo(title: String!, boardId: String!): Todo!
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;
