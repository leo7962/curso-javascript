'use strict'

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Acabas de ingresar a Home'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el método o la función test del controlador de project'
        });
    }

};

module.exports = controller;