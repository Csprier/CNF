import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = (props) => (
  <Header 
    statusBarProps={{ barStyle: 'light-content' }}
    centerComponent={{ text: props.headerText, style: { fontSize: 30, fontWeight: 'bold', color: '#ead8ab' } }}
    outerContainerStyles={{ height: 100, backgroundColor: '#8e7022' }}
  />
);

export default AppHeader;