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

export const PRODUCTS_GET_BY_CATEGORY_ID = gql`
query GetProductsByCategoryId($categoryId: Int) {
  products(where: {categoryId: $categoryId}) {
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
  productCategories {
    nodes {
      name
      productCategoryId
    }
  }
}

`;


