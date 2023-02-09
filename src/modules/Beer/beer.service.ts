import { BaseService } from '@core';

export class BeerService extends BaseService {
  public message(props: { name: string }) {
    this.log("Sending 'Hello World' message to", props.name);

    return 'Hello World, ' + props.name;
  }
}

export default BeerService;
