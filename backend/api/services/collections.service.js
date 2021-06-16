const axios = require("axios");
const options = require('../utils/config')
/**
 * Get Rest Test
 */
 const getCollections = async (cursor) => {
     
     try {
    const after = (cursor !== undefined) ? `, after: "${cursor}"` : '';
    const queryToSend = `query Collections($order: CollectionsOrder) {
    collections(order: $order ${after}) {
        edges {
        node {
            id
            createdAt
            url
            description
            name
        }
        }
        pageInfo {
        endCursor
        startCursor
        }
    }
    }      
    `;
    const data = await axios.post(process.env.API_URL, {
    query: queryToSend, // `query Collections($order: CollectionsOrder) { collections(order: $order) { edges { node { id createdAt url } } pageInfo { endCursor startCursor }}}`,
    variables: {
        order: 'FEATURED_AT',
        }
    }, options)
    return (data.data);
    } catch(err) {
        console.log(err);
        throw(err)
    }
  };

  /**
 * Get Rest Test
 */
 const getProductsByCollectionId = async (collectionId) => {
     
    try {
   const queryToSend = `query{
    collection(id: ${collectionId}) {
          createdAt
          url
          description
          name
          coverImage
      posts(){
        edges {
        node {
          id
          createdAt
          url
          description
          name
          media {
            type
            url
            videoUrl
          }
          tagline
          website 
        }
      }
      pageInfo {
        endCursor
        startCursor
      }
      }
    }
  }     
   `;
   const data = await axios.post(process.env.API_URL, {
   query: queryToSend,
   }, options)
   return (data.data);
   } catch(err) {
       console.log(err);
       throw(err)
   }
 };
  
  module.exports = {
    getCollections,
    getProductsByCollectionId,
  };