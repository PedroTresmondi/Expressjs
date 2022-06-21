const { expect } = require('chai');
const { format } = require('morgan');
const FormatAnimals = require('../../../src/helpers/formatAnimals')

describe('FormatAnimals', function () {
    describe('execute()', function () {
        it.only('should return the formatted animal list', function () {
            const formatAnimals = new FormatAnimals;
            const animals = [{
                "_id": "62b08840c3a7f38b8e0009b9",
                "nome": "teste2",
                "raca": "Yorkshire",
                "idade": 99,
                "tipo": "Cachorro",
                "__v": 0
            }]
            
            expect(formatAnimals.execute(animals)).to.be.a('array');
        });
    });
});     