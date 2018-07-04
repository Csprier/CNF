import React, { Component } from 'react';

import { View, FlatList } from 'react-native';

import { getNews, searchArticles } from './src/news';
import AppHeader from './src/components/AppHeader';
import SearchBar from './src/components/SearchBar';
import Article from './src/components/Article';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: false,
      searchTerm: ''
    };
    this.fetchNews = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  onPressSearch = term => {
    this.setState({ refreshing: true })
    searchArticles(term)
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState({
      refreshing: true
    }, 
      () => this.fetchArticles()
    );
  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor: '#ead8ab' }}>
        <AppHeader headerText="| News Feed App |"/>
        <SearchBar 
          refreshing={this.state.refreshing}
          onPressSearch={this.onPressSearch} 
        />
        <View style={{ flex:1, backgroundColor: '#ead8ab' }}>
          <FlatList 
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
        </View>
      </View>
    );
  }
}

/* 
<View>
  <SearchBar
    lightTheme
    // onChangeText={someMethod}
    // onClearText={someMethod}
    icon={{ type: 'font-awesome', name: 'search' }}
    placeholder='Search articles...' 
  />
</View>  
*/

  // handleSearch(text) {
  //   let formatQuery = text.toLowerCase();
  //   // this.setState({ searchTerm: text })
  //   let searchTermUrl = `https://newsapi.org/v2/top-headlines?country=us&' + 'q=${formatQuery}' + '&apiKey=${API_KEY}`;
  //   return fetch(searchTermUrl)
  //     .then(() => this.getNews())
  //     .catch(err => console.error(err));
  // }