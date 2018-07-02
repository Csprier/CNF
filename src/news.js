const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1ab20b12ec714c1f9fa88a2a6b7e9709';

export const getNews = () => {
  let result = await fetch(url).then(res => res.json());
  return result.articles;
}