import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  ImageBackground,
  Linking,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';

class FadeInView extends React.Component {
  state = {
    fadeIn: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeIn,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeIn } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeIn,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        user: undefined // User has not signed in yet
  }
}

  render() {
    return (
      <ImageBackground source={require('./loginbackground.jpg')} style={styles.container} >
        <React.Fragment>
          <View style={styles.content}>
            <FadeInView>
            <Text style={styles.text}>
              Event Scene
            </Text>
            </FadeInView>
          </View>
          <View style={styles.smallText}>
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'Futura'}}>Please log in to view events in your area</Text>
          </View>
          <View style={styles.buttons}>
            <Icon.Button name="facebook" 
                        backgroundColor="#3b5998" 
                        onPress={this.props.loginWithFacebook} 
                        {...iconStyles}
            > Login with Facebook
            </Icon.Button>
            <Icon.Button name="google"
                        backgroundColor="#DD4B39"
                        onPress={this.props.loginWithGoogle} 
                        {...iconStyles}
            > Login with Google
            </Icon.Button>
          </View>
      </React.Fragment>
    </ImageBackground>
    );
  }
}




const iconStyles = {
  borderRadius: 10,
  iconStyle: {paddingVertical: 5}
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    height: '100%'
  },
  content: {
    width: '100%',
    height: '85%',
    paddingTop: 80,
  },
  text: {
    textAlign: 'center',
    fontSize: 72, 
    color: 'lightyellow', 
    fontFamily: 'Noteworthy'
  },
  smallText: {
    alignItems: 'center'
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10
  }
});