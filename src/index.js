const express = require('express');
const path = require('path');

//inicializacion
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join (__dirname, 'views'));
app.set('view engine', 'ejs');

//middleares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./rutas/index'));

//start server
app.listen(app.get('port'), () => {
    console.log("Server escuchando", app.get('port'))
});
