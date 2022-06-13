const animais = require('../models/Animal.js');

class AnimalController {
    static listarAnimais = (req, res) => {
        animais.find((err, animais) => {
            res.status(200).json(animais)
        })
    }

    static cadastrarAnimal = (req, res) => {
        let animal = new animais(req.body);
        animal.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar animal`})
            }
            res.status(201).send(animal.toJSON())
        })
    }
}

module.exports = AnimalController;