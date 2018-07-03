import React from 'react';

import { StyleSheet, View, FlatList } from 'react-native';
import SearchBar from 'react-native-searchbar'

import { getNews } from './src/news';
import Article from './src/components/Article';

export default class App extends React.Component {
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

  render() {
    return (
      <View style={{ backgroundColor: 'goldenrod' }}>
        <SearchBar showOnLoad placeholder="Search articles..."/>
        <FlatList 
          style={styles.flatlist}
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 75
  }
});
