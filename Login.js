import React from 'react';
import Tabs from './Tabs';
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

  // static navigationOptions = {
  //   title: 'Login'
  // }

  // Set up OAuth2.0 Linking
  componentDidMount() {
    // Adds event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL)
  };

  handleOpenURL = ({ url }) => {
    //Regex expression to extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Parses user string into JSON
      user: JSON.parse(decodeURI(user_string))
    });

    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  // Button to handle login with Facebook
  loginWithFacebook = () => this.openURL('http://10.0.0.223:3000/auth/facebook');

  // Button to handle login with Google
  loginWithGoogle = () => this.openURL('http://10.0.0.223:3000/auth/google');


  // Open URL in a browser

  openURL = (url) => {
    console.log("It works")
    if (Platform.OS ==='ios'){
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    } else {
      Linking.openURL(url);
    }
  };

  render() {
    const { user } = this.state;
    return (
      <ImageBackground source={require('./loginbackground.jpg')} style={styles.container} >
        <View style={styles.container}>
          { user 
            ?
              <View style={styles.label}>
                <View style={styles.avatar}>
                  <Image source={{ uri: user.avatar}} style={styles.avatarImage} />
                </View>
                <Image source={require('./iphone-app-3x.png')} style={{width: 70, height: 70, marginTop: 10}}/> 
              </View>
            :
              <View style={styles.label}>
                <View style={styles.avatar}>
                  <Icon name="map" size={50} color="lightskyblue" />
                </View>
                <Image source={require('./iphone-app-3x.png')} style={{width: 70, height: 70, marginTop: 10}}/> 

              </View>    
          }
          <View style={styles.buttons}>
            <Icon.Button name="facebook" 
                        backgroundColor="#3b5998" 
                        onPress={this.loginWithFacebook} 
                        {...iconStyles}
            > Login with Facebook
            </Icon.Button>
            <Icon.Button name="google"
                        backgroundColor="#DD4B39"
                        onPress={this.loginWithGoogle} 
                        {...iconStyles}
            > Login with Google
            </Icon.Button>
          </View>
        </View>
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