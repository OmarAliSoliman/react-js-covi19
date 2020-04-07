
import axios from 'axios';

export async function getCountry() {
  const response = await axios.get('https://corona.lmao.ninja/countries');
  return response;
};
