const path = require('path');
const fastKoa = require('fast-koa');
const config = require('./config');

fastKoa.initApp({ routesPath: config.routesPath });

fastKoa
  .listen(7777)
  .then(server => {
    const addr = server.address();
    console.log(`Server started. listen ${addr.port}`);
  })
  .catch(console.error);
