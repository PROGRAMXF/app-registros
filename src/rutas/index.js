const {Router} = require('express');
const router = new Router();

let alumnos = [];

router.get("/", (req, res) =>{
    res.render("index", {alumnos});
});

router.get('/registro-form', (req, res) =>{
    res.render('registro-form');
});

router.post('/resgistro-form', (req, res)=>{
    let {nombre, documento} = req.body;
    let nuevoRegistro = {nombre, documento, fecha: new Date()};
    alumnos.push(nuevoRegistro);
    res.reddirect("/");
})
 
module.exports = router;