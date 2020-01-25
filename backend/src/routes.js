const { Router } = require('express');
const SearchController = require('./controllers/SearchController');
const DevConstroller = require('./controllers/DevController');

const routes = Router();

routes.get( '/devs', DevConstroller.index );
routes.post( '/devs', DevConstroller.store );

routes.get( '/search', SearchController.index );
module.exports = routes;