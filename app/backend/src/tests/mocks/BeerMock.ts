import { IBeers } from '../../interfaces/IBeers';

const BeerMock: IBeers = {
    abv: 10,
    address: "porto velho rondonia",
    category: "cerveja atersanal",
    city: "porto velho",
    coordinates: [10, 80],
    country: "brasil",
    description: "cerveja muito boa criada para portovelhenses",
    ibu: 10,
    state: "rondonia",
    name: "madeira",
    website: "www.google.com"
};

const BeerMockId: IBeers & { _id: string } = {
    _id: '62cf1fc6498565d94eba52cd',
    abv: 10,
    address: "porto velho rondonia",
    category: "cerveja atersanal",
    city: "porto velho",
    coordinates: [10, 80],
    country: "brasil",
    description: "cerveja muito boa criada para portovelhenses",
    ibu: 10,
    state: "rondonia",
    name: "madeira",
    website: "www.google.com"
};

const BeerUpadateMockId: IBeers & { _id: string } = {
    _id: '62cf1fc6498565d94eba52cd',
    abv: 10,
    address: "porto velho rondonia",
    category: "cerveja atersanal",
    city: "porto velho",
    coordinates: [10, 80],
    country: "brasil",
    description: "cerveja muito boa criada para portovelhenses",
    ibu: 10,
    state: "rondonia",
    name: "dale",
    website: "www.google.com"
  };

  const BeersMocks: IBeers[] = [
    {
        abv: 10,
        address: "porto velho rondonia",
        category: "cerveja atersanal",
        city: "porto velho",
        coordinates: [10, 80],
        country: "brasil",
        description: "cerveja muito boa criada para portovelhenses",
        ibu: 10,
        state: "rondonia",
        name: "dale",
        website: "www.google.com"
    }, 
    {
        abv: 10,
        address: "porto velho rondonia",
        category: "cerveja atersanal",
        city: "porto velho",
        coordinates: [10, 80],
        country: "brasil",
        description: "cerveja muito boa criada para portovelhenses",
        ibu: 10,
        state: "rondonia",
        name: "hoje",
        website: "www.google.com"
    }];

export {
    BeerMock,
    BeerMockId,
    BeerUpadateMockId,
    BeersMocks,
};