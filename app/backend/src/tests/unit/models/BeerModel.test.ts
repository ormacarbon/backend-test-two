/*eslint-disable */
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import BeersModel from '../../../models/BeersModel';
import {
  BeerMock, BeerMockId, BeerUpadateMockId,
  BeersMocks
} from '../../mocks/BeerMock';

describe('Beers Model', function () {
    const beer = new BeersModel();


  before(function () {
    sinon.stub(Model, 'create').resolves(BeerMockId).onCall(1).resolves(null);
    sinon.stub(Model, 'findOne').resolves(BeerMockId).onCall(1).resolves(null);
    sinon.stub(Model, 'find').resolves(BeersMocks);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(BeerUpadateMockId)
    .onCall(1).resolves(null);
    sinon.stub(Model, 'findByIdAndRemove').resolves(BeerMockId)
    .onCall(1).resolves(null);
  });

  after(function () {
    sinon.restore();
  });

  describe('Criando uma cerveja', function () {
    it('Cerveja Criada', async function () {
      const userFound = await beer.create(BeerMock)
      expect(userFound).to.be.deep.equal(BeerMockId);
    });
  });

  // describe('Encontrando todas as cervejas', function () {
  //   it('Cervejas encontradas', async function () {
  //     await beer.readAll(1,1)
  //   });
  // });

  describe('Atualizando uma cerveja', function () {
    it('Cerveja atualizada', async function () {
      const userFound = await beer.update(BeerUpadateMockId._id, BeerMock)
      expect(userFound).to.be.deep.equal(BeerUpadateMockId);
    });

    it('Cerveja não atualizada', async function () {
      try {
        await beer.update('', BeerMock)
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('Encontrando uma cerveja', function () {
    it('Cerveja encontrada', async function () {
      const userFound = await beer.readBeer(BeerMockId.name)
      expect(userFound).to.be.deep.equal(BeerMockId);
    })
  });

  describe('Deletando  uma cerveja', function () {
    it('Cerveja Deletada', async function () {
      const userFound = await beer.delete(BeerMockId._id)
      expect(userFound).to.be.deep.equal(BeerMockId);
    });

    it('Cerveja não encontrada', async function () {
      try {
        await beer.delete('')
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});