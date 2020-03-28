var express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')

const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

/* Login */
routes.post('/sessions',SessionController.createController);

/* ongs */
routes.get('/ongs', OngController.indexController )
routes.post('/ongs', OngController.createController )

/* incidents */
routes.post('/incidents', IncidentController.createController )
routes.get('/incidents', IncidentController.indexController )
routes.delete('/incidents/:id', IncidentController.deleteController )

/* profile */
routes.get('/profile', ProfileController.indexController )


module.exports = routes;