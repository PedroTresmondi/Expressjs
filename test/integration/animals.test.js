const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../../src/app');

describe('Animals', function () {
    describe('/', function () {
        it('should return all animals', function () {
            supertest(app).get('/animals')
                .expect(200)
                .end(function (err, res) {
                    expect(res.body).to.equals([
                        {
                          _id: '62b08840c3a7f38b8e0009b9',
                          nome: 'teste2',
                          raca: 'Yorkshire',
                          idade: 99,
                          tipo: 'Cachorro',
                          __v: 0
                        },
                        {
                          _id: '62b089725fd197b7a5f0852c',
                          nome: 'teste3',
                          raca: 'Yorkshire',
                          idade: 2,
                          tipo: 'Cachorro',
                          __v: 0
                        }
                      ]);

                });
        });
    });
});
