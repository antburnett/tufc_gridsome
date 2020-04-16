// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

module.exports = function(api) {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  // api.loadSource(async actions => {
  //   const { data } = await axios.get('http://127.0.0.1:3000/v1/nearest/atm/151%2C-33%2C4326?geom_column=geom&columns=*&limit=10');

  //   const collection = actions.addCollection({
  //     typeName: 'Location'
  //   });

  //   for (const location of data) {
  //     collection.addNode({
  //       id: location.id,
  //       name: location.name,
  //       fulladdress: location.fulladdress,
  //       distance: location.distance
  //     });
  //   }
  // });

  // api.loadSource(({ addSchemaResolvers }) => {
  //   addSchemaResolvers({
  //     Article: {
  //       excerpt(obj) {
  //         var longText = obj.excerpt.length > 200 ? '...' : '';
  //         return obj.excerpt.replace(/^(.{200}[^\s]*).*/, '$1' + longText);
  //       }
  //     }
  //   });
  // });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
