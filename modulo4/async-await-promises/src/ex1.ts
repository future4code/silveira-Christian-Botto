import { baseURL } from './baseURL';

// a)
// GET subscribers 

// b)
// Promise<any[]>

// c)
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };