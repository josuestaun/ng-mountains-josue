"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Mountain = /** @class */ (function () {
    function Mountain(id, nombre, descripcion, altura, desnivel, tiempo, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.altura = altura;
        this.desnivel = desnivel;
        this.tiempo = tiempo;
        this.imagen = imagen;
    }
    return Mountain;
}());
var mountains = [
    new Mountain(0, "Oroel", "La Peña Oroel es un monte de 1769 m de altura situado en Huesca (España), junto a la ciudad de Jaca. No es muy elevada, pero tiene mucha personalidad y resulta muy familiar en Jaca por ser muy visible desde cualquier punto de la ciudad.", 1769, 569, "1 hora", "../../assets/images/oroel.jpg"),
    new Mountain(1, "Collarada", "Collarada es un pico del Pirineo aragonés de 2886 msnm de altitud, enclavado en el municipio de Villanúa (Huesca, España). Es la máxima altura de la Comarca de la Jacetania y una de las cumbres más impactantes del Pirineo por su amplia visibilidad. Se encuentra en el circo de Ip.", 2886, 2100, "4 horas", "../../assets/images/collarada.jpeg"),
    new Mountain(2, "Aneto", "El Aneto es el pico más elevado de los Pirineos, con una altitud de 3404 metros sobre el nivel del mar. Se encuentra situado en el Parque natural Posets-Maladeta, en el municipio español de Benasque, provincia de Huesca, comunidad autónoma de Aragón.", 3404, 1354, "3 horas", "../../assets/images/aneto.jpg"),
    new Mountain(3, "Lecherin", "Pico Lecherin se encuentra entre Aisa y Canfranc.", 2567, 1220, "2 horas y media", "../../assets/images/lecherin.jpg"),
    new Mountain(4, "Anayet", "El Anayet es un volcán que pertenece a los Pirineos. Se sitúa al norte de Aragón (España), casi en la frontera con Francia, y no lejos del volcán de Ossau.", 2545, 1023, "2 horas y media", "../../assets/images/vertice.jpg")
];
function getMountains() {
    return mountains;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/products', bodyParser.json(), function (req, res) {
    var pNew = new Mountain(mountains.length + 1, req.body.nombre, req.body.descripcion, req.body.altura, req.body.desnivel, req.body.tiempo, req.body.imagen);
    mountains.push(pNew);
    res.status(200).send({
        id: pNew.id,
        nombre: pNew.nombre,
        descripcion: pNew.descripcion,
        altura: pNew.altura,
        desnivel: pNew.desnivel,
        tiempo: pNew.tiempo,
        imagen: pNew.imagen
    });
});
app.get('/', function (req, res) {
    res.send('The URL of products is http://localhost:8000/mountains');
});
app.get('/mountains', function (req, res) {
    res.json(getMountains());
});
function getMountainsById(mountainId) {
    var m;
    m = mountains.find(function (m) { return m.id == mountainId; });
    return m;
}
app.get('/mountains/:id', function (req, res) {
    res.json(getMountainsById(parseInt(req.params.id)));
});
function updateMountainsById(req, mountainId) {
    var m;
    m = mountains.find(function (m) { return m.id == mountainId; });
    var index = mountains.indexOf(m);
    m.nombre = req.body.nombre,
        m.descripcion = req.body.descripcion,
        m.altura = req.body.altura,
        m.desnivel = req.body.desnivel,
        m.tiempo = req.body.tiempo,
        m.imagen = req.body.imagen;
    mountains[index] = m;
    return m;
}
app.put('/mountains/:id', function (req, res) {
    res.json(updateMountainsById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteMountainsById(mountainId) {
    var m;
    m = mountains.find(function (m) { return m.id == mountainId; });
    var index = mountains.indexOf(m);
    delete mountains[index];
    return m;
}
app.delete('/mountains/:id', function (req, res) {
    res.json(deleteMountainsById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});