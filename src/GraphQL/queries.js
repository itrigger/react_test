import {gql} from "@apollo/client";

export const PRODUCTS_GET_ALL = gql`
    query MyQuery {
      products {
        nodes {
          id
          image {
            sourceUrl(size: THUMBNAIL)
          }
          name
          metaData {
            key
            value
          }
        }
      }
    }
`;

