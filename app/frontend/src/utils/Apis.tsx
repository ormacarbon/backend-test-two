import axios from 'axios';

export async function apiBeers() {
  try {
    const response = await axios.get('http://localhost:3001/beers');
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiCreateBeer(obj: object) {
  try {
    const response = await axios.post(
      'http://localhost:3001/beers',
      { obj },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiBeersQuerys(page: number) {
  try {
    const response = await axios.get(`http://localhost:3001/beers?limit=10&skip=${page}`);
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiDeleteBeers(id: string) {
  try {
    const response = await axios.delete(
      `http://localhost:3001/beers/${id}`,
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function apiupdateBeers(id: string, obj: object) {
  try {
    const response = await axios.put(
      `http://localhost:3001/beers/${id}`,
      { obj },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}
