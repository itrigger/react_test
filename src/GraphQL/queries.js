import {gql} from "@apollo/client";

export const EXCHANGE_RATES = gql`
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