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

import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';

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
          <View style={styles.label}>
            <View style={styles.avatar}>
              <Icon name="user-circle" size={50} color="lightskyblue" />
            </View>
            <Image source={require('./iphone-app-3x.png')} style={{width: 70, height: 70, marginTop: 10}}/> 
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  avatar: {
    margin: 15,
    marginTop: 18,
    shadowRadius: 12,
    shadowColor: 'white'
  },
  avatarImage: {
    borderRadius: 30,
    width: 60,
    height: 60,
    shadowRadius: 12,
    shadowColor: 'white'
  },
  label: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 15
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
    margin: 10,
    marginBottom: 30
  }
});