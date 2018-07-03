const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1ab20b12ec714c1f9fa88a2a6b7e9709';

export async function getNews() {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.articles)
    .catch(err => console.error(err));
};