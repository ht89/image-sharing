import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import { Icon, Button } from 'native-base';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {
          Platform.OS === 'android' &&
          <Button transparent 
            onPress={this.props.onMenuButtonPress}>
            <Icon name='menu' style={styles.menuIcon} />
          </Button>
        }
        
        <Image source={require('../../img/logo.png')}
          style={styles.logo} />
        
        {
          Platform.OS === 'android' &&
          <Button onPress={this.props.onCameraButtonPress} transparent>
            <Icon name='camera' style={styles.cameraIcon} />
          </Button>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  menuIcon: {
    fontSize: 30,
    color: 'black',
  },
  logo: {
    height: 25,
    resizeMode: 'contain',
  },
  cameraIcon: {
    fontSize: 30,
    color: 'black'
  }
});