import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  ImageBackground,
  Linking
} from 'react-native';


export default class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        user: this.props.user // User is logged in 
  }
}
  static navigationOptions = {
    Title: 'My Events'
  }

  render() {
    return(
      <ImageBackground source={require('./preview.jpg')} style={styles.container} >
        <React.Fragment>
          <View style={styles.container}>
              <Text>My Events</Text>
          </View>
        </React.Fragment>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      // backgroundColor: 'aliceblue'
    }
})