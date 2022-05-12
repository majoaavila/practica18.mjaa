let express = require('express'); //inyeccion de la dependencia
let router = express.Router();
//instantacion del router

router.get('/person', (req, res) => {
    res.send('has solicitado el listado de personas');
});

module.exports = router;

// cuando las rutas crecen se deben de organizar