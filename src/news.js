import { API_KEY } from 'react-native-dotenv';
// ApiClient.init(API_KEY);

// const url = 'https://newsapi.org/v2/top-headlines?country=us' + '&apiKey=' + API_KEY;
// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1ab20b12ec714c1f9fa88a2a6b7e9709';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
export async function getNews() {
  console.log('getNews()')
  return fetch(url)
    .then(res => res.json())
    .then(json => json.articles)
    .catch(err => console.error(err));
};