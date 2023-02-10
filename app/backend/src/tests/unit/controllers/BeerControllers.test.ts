/*eslint-disable */
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import BeersController from '../../../controllers/BeersControllers';
import BeersModel from '../../../models/BeersModel';
import BeerService from '../../../services/BeersService';
import {
    BeerMock, BeerMockId, BeerUpadateMockId,
    BeersMocks
  } from '../../mocks/BeerMock';
import { undefined } from 'zod';

describe('Beer Controller Create', () => {
    const beersModel = new BeersModel()
    const beersService = new BeerService(beersModel);
    const beersController = new BeersController(beersService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.body = {}
        sinon.stub(beersService, 'create').resolves(BeerMock);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cerveja Criada', async () => {
        await beersController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    });
});

describe('Beer Controller Create', () => {
    const beersModel = new BeersModel()
    const beersService = new BeerService(beersModel);
    const beersController = new BeersController(beersService);
    const teste = new Error('dale')
    const req = {} as Request;
    const res = {} as Response;
    before(async () => {
        sinon.stub(beersService, 'create').resolves(teste).onFirstCall();
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(() => {
        sinon.restore()
    })
    it('Cerveja não criada', async () => {
        await beersController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    });
});

describe('Beer Controller Delete', () => {
    const beersModel = new BeersModel()
    const beersService = new BeerService(beersModel);
    const beersController = new BeersController(beersService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.params = { id: '324234' }
        sinon.stub(beersService, 'delete').resolves(BeerMock);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cerveja deletada', async () => {
        await beersController.delete(req, res);
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
});

describe('Beer Controller Delete', () => {
    const beersModel = new BeersModel()
    const beersService = new BeerService(beersModel);
    const beersController = new BeersController(beersService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        sinon.stub(beersService, 'delete').resolves(BeerMock);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cerveja não deletada', async () => {
        await beersController.delete(req, res);
        expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    });
});

describe('Beer Controller Update', () => {
    const beersModel = new BeersModel()
    const beersService = new BeerService(beersModel);
    const beersController = new BeersController(beersService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.params = { id: '324234' }
        req.body = {}
        sinon.stub(beersService, 'update').resolves(BeerMock);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cerveja atualizada', async () => {
        await beersController.update(req, res);
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
});

describe('Beer Controller Update', () => {
    const beersModel = new BeersModel()
    const beersService = new BeerService(beersModel);
    const beersController = new BeersController(beersService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        sinon.stub(beersService, 'update').resolves(BeerMock);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cerveja não atualizada', async () => {
        await beersController.update(req, res);
        expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    });
});

describe('Customer Controller readAll', () => {
    const beersModel = new BeersModel()
    const beersService = new BeerService(beersModel);
    const beersController = new BeersController(beersService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.body = {}
        sinon.stub(beersService, 'readAll').resolves(BeersMocks);
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Clientes encontrados', async () => {
        await beersController.readAll(req, res);
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
});