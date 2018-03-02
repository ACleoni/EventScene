import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  ImageBackground,
  Linking
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    navbar: {
        height: '10%',
        backgroundColor: 'lightskyblue',
        width: '100%'
    },
    text: {
        color: 'white'
    }
  });
  
  export default class InteractiveMap extends React.Component {
    render() {
      const { region } = this.props;
      console.log(region);
  
      return (
        <View style ={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
          <View style={styles.navbar}>
            <Text style={styles.text}>Some stuff</Text>
          </View>
        </View>
        
      );
    }
  }

  
