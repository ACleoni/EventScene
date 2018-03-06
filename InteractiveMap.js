import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import axios from 'axios';


const parseString = require('xml2js').parseString;

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  ImageBackground,
  Linking,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


  
export default class InteractiveMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },       
            markers: []
    
    }
}
    
    static navigationOptions = {
        Title: 'Map'
      }
    
    onRegionChange = (region) => {
        console.log(region)
        this.setState({ region: region });  
    }

    handlePress = () => {
        const url = `http://api.eventful.com/rest/events/search?where=${this.state.region.latitude},${this.state.region.longitude}&within=10&app_key=zMkK7KPG9BQc8XJh`
        
        axios.get(url)
         .then(response => response.data)
         .then(result =>{
             parseString(result, (err, res)=>{
             jsonData = res
            //  console.dir(jsonData)
             console.log(jsonData.search.events[0].event)
             const eventDataArray = jsonData.search.events[0].event.map(newEvent =>{
                 console.log(newEvent.title);
                 return {title: newEvent.title[0], coordinates: { latitude: parseFloat(newEvent.latitude[0]), longitude: parseFloat(newEvent.longitude[0])}, description: newEvent.venue_name[0]}
             });
             console.log(eventDataArray)
             this.setState({markers: eventDataArray})
             })
         }).catch(error => console.log(error)
        )
    }


    render() {
        const { region } =this.state;
        return(
        <React.Fragment>
            <View style={styles.container}>
                <MapView
                style={styles.map}
                initialRegion={ region }
                onRegionChange={this.onRegionChange}
                >
                
                {this.state.markers.map((marker, index) => (
                    <Marker
                        key={marker.index}
                        coordinate={marker.coordinates}
                        title={marker.title}
                        description={marker.description}
                        pinColor={'lightskyblue'}
                        onPress={e => console.log(e.description)}
                    />
                ))}
                </MapView>
                <View style={styles.buttonContainer}>
                <Button onPress={this.handlePress} title="Shoot" style={styles.Icon} /><Icon name='crosshairs' size={25}/>
                </View>
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
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50%',
        // borderWidth: 2
        

    }
});

  
