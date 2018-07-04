import React from 'react';
import { View, Linking, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

export default class Article extends React.Component {
  render() {
    // Destructing the article prop
    const { title, description, source, urlToImage, url } = this.props.article;
    // Destructing the styles
    const { noteStyle, featureTitleStyle } = styles;
    // defaultImg is for when articles have no default image of their own
    const defaultImg = 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    // Linking is for interacting with incoming/outgoing app links
    return (
      <TouchableHighlight useForeground onPress={() => Linking.openURL(url)}>
        <Card 
          featuredTitle={title} 
          featuredTitleStyle={featureTitleStyle} 
          image={{ uri: urlToImage || defaultImg }}
        >
          <Text style={{ padding: 10, marginBottom: 10 }}>{description || 'Read more...'}</Text>
          <Divider style={{ backgroundColor: '#8e7022'}} /> 
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
          </View>
        </Card>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#8e7022',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3},
    textShadowRadius: 3
  }
});