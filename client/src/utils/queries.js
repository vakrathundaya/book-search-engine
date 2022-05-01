import gql from "graphql-tag";

export const GET_ME = gql`
    query me {
        me {
            username
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
            }
        }
    }
`;