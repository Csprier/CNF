import { API_KEY } from 'react-native-dotenv';

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function getNews() {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.articles)
    .catch(err => console.error(err));
};