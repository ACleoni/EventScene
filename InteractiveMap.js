import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Tabs from './Navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  ImageBackground,
  Linking
} from 'react-native';


  
export default class InteractiveMap extends React.Component {
    
    static navigationOptions = {
        Title: 'Map'
      }

    render() {
        const { region } = this.props;
        console.log({ region });
        return(
        <React.Fragment>
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
            </View>
        </React.Fragment>
        );
    }
}

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
        height: '100%',
        // backgroundColor: 'white',
        width: '100%',
        borderBottomWidth: .5,
        borderBottomColor: 'grey'
    }
});

  
