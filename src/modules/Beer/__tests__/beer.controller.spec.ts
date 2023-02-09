/* eslint-disable @typescript-eslint/no-empty-function */
import { BeerController } from '../beer.controller';
import { BeerService } from '../beer.service';

const controller = new BeerController({
  name: 'beer-mock',
  service: {
    message: ({ name }) => 'Hello World, ' + name,
    log: {} as any,
  } as BeerService,
});

describe('BeerController', () => {
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have a message method', () => {
    expect(controller.helloWorld).toBeDefined();
  });

  it('should call the service message method', () => {
    const spy = jest.spyOn(controller.service, 'message');

    const res = { status: () => ({ json: () => {}, send: () => {} }) };
    const body = { name: 'Neith' };

    controller.helloWorld({ body } as any, res as any);

    expect(spy).toHaveBeenCalledWith(body);
  });
});
