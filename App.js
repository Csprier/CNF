import React, { Component } from 'react';
import { API_KEY } from 'react-native-dotenv';

import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { Header, Button } from 'react-native-elements';

import { getNews } from './src/news';
import SearchBar from './src/components/SearchBar';
import Article from './src/components/Article';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: true,
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

  handleRefresh() {
    this.setState({
      refreshing: true
    }, 
      () => this.fetchArticles()
    );
  }

  // handleSearch(text) {
  //   let formatQuery = text.toLowerCase();
  //   // this.setState({ searchTerm: text })
  //   let searchTermUrl = `https://newsapi.org/v2/top-headlines?country=us&' + 'q=${formatQuery}' + '&apiKey=${API_KEY}`;
  //   return fetch(searchTermUrl)
  //     .then(() => this.getNews())
  //     .catch(err => console.error(err));
  // }

  onPressSearch = term => {
    console.log(term);
  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor: '#ead8ab' }}>
        <Header 
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: '|| CNF ||', style: { fontSize: 30, fontWeight: 'bold', color: '#ead8ab' } }}
          outerContainerStyles={{ height: 100, backgroundColor: '#8e7022' }}
        />
        <SearchBar onPressSearch={this.onPressSearch} />
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