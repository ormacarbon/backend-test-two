/*eslint-disable */
import { expect } from 'chai';
import * as sinon from 'sinon';
import BeersModel from '../../../models/BeersModel';
import BeerService from '../../../services/BeersService';
import {
    BeerMock, BeerMockId, BeerUpadateMockId,
    BeersMocks
  } from '../../mocks/BeerMock';

describe('Beers Service', () => {
    const beerModel = new BeersModel();
    const beerService = new BeerService(beerModel);

    before(() => {
        sinon.stub(beerModel, 'create').resolves(BeerMockId);
        sinon.stub(beerModel, 'readAll').resolves(BeersMocks)
            .onCall(1).resolves(undefined);
        sinon.stub(beerModel, 'update').resolves(BeerUpadateMockId)
            .onCall(1).resolves(null);
        sinon.stub(beerModel, 'readBeer').resolves(null)
            .onCall(1).resolves(BeerMock);
        sinon.stub(beerModel, 'delete').resolves(BeerMockId)
            .onCall(1).resolves(null);
    })
    after(() => {
        sinon.restore()
    })

    describe('Criando uma cerveja', () => {
        it('Cerveja Criada', async () => {
            const result = await beerService.create(BeerMock);
            expect(result).to.be.deep.equal(BeerMockId);
        });
        it('Cerveja já existe', async () => {
            try {
                await beerService.create(BeerMock)
            } catch (error: any) {
                expect(error.message).to.be.eq('Cerveja já cadastrada');
            }
        });
    });

    describe('Buscando varias cervejas', () => {
        it('cervejas existem', async () => {
            const result = await beerService.readAll();
            expect(result).to.be.deep.equal(BeersMocks);
        });
    });

    describe('Atualizando uma cerveja', () => {
        it('cerveja atualizada', async () => {
            const result = await beerService.update(BeerMockId._id, BeerMockId);
            expect(result).to.be.deep.equal(BeerUpadateMockId);
        });
        it('cerveja não existe', async () => {
            try {
                await beerService.update('1231231', BeerMockId);
            } catch (error: any) {
                expect(error.message).to.be.eq('Nenhuma cerveja encontrada');
            }
        });
    });

    describe('Deletando uma cerveja', () => {
        it('cerveja deletada', async () => {
            const result = await beerService.delete(BeerMockId._id);
            expect(result).to.be.deep.equal(BeerMockId);
        });
        it('cerveja não existe', async () => {
            try {
                await beerService.delete('2313123');
            } catch (error: any) {
                expect(error.message).to.be.eq('Nenhuma cerveja encontrada');
            }
        });
    });
});