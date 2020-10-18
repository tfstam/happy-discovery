const express = require('express');
const path = require('path');

const pages = require('./pages')

const server = express();

server
.use(express.static('public'))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

server.listen(5500)