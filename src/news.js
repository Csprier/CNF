import { API_KEY } from 'react-native-dotenv';

const url = `https://newsapi.org/v2//top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

export async function getNews() {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.articles)
    .catch(err => console.error(err));
};

export async function searchArticles(term) {
  const searchTermUrl = `https://newsapi.org/v2/everything?q=${term}&apiKey=${API_KEY}`;
  return fetch(searchTermUrl)
    .then(res => res.json())
    .then(json => json.articles)
    .catch(err => console.error(err));
}