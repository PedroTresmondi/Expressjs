const AnimalModel = require('../models/Animal');

class AnimalController {
  static list = (req, res) => {
    AnimalModel.find((err, animais) => {
      res.status(200).json(animais);
    });
  };

  static listById = (req, res) => {
    const { id } = req.params;
    AnimalModel.findById(id, (err, animais) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - ID nao encontrado`
        });
      } else {
        res.status(200).send(animais);
      }
    });
  };

  static register = (req, res) => {
    const animal = new AnimalModel(req.body);
    animal.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - Falha ao cadastrar animal`
        });
      }
      res.status(201).send(animal.toJSON());
    });
  };

  static updateById = (req, res) => {
    const { id } = req.params;

    AnimalModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({
          message: 'Cadastro Atualizado com sucesso'
        });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static delete = (req, res) => {
    const { id } = req.params;

    AnimalModel.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Animal removido' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

module.exports = AnimalController;
