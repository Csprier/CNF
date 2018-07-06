import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  clearInput = () => {
    this.textInputRef.clear();
  }

  render() {
    return(
      <View style={styles.containerStyle}>
        <TextInput 
          style={styles.searchTextStyle} 
          placeholder='Search articles...'
          onChangeText={term => this.setState({ searchTerm: term })}
          value={this.state.searchTerm}
          clearButtonMode="always"
        />
        <Button 
          buttonStyle={styles.buttonStyle}
          title={this.props.refreshing ? 'Loading' : 'Search'}
          onPress={() => {
            {this.props.onPressSearch(this.state.searchTerm)}
            {this.clearInput}
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ead8ab'
  },
  searchTextStyle: {
    flex: 1,
  },
  buttonStyle: {
    height: 45,
    marginBottom: 8,
    backgroundColor: '#8e7022'
  }
});

export default SearchBar;