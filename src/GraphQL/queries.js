import {gql} from "@apollo/client";

export const PRODUCTS_GET_ALL = gql`
    query MyQuery {
      products {
        nodes {
          id
          image {
            sourceUrl(size: LARGE)
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

export const PRODUCTS_GET_BY_CATEGORY_ID = gql`
query GetProductsByCategoryId($categoryId: Int) {
  products(where: {categoryId: $categoryId}, first: 100) {
    nodes {
      name
      databaseId
      metaData(keysIn: ["gold", "silver", "platinum", "palladium", "fixprice", "typecount"]) {
        key
        value
      }
    }
  }
}

`;

export const CATEGORIES_GET_ALL = gql`
query GetAllCategories {
  productCategories(first: 100) {
    nodes {
      name
      productCategoryId
    }
  }
}

`;


