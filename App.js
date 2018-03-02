import React from 'react';
import Profile from './Profile';
import Login from './Login';
import Home from './Home'
import Tabs from './Navigation'
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

export default class App extends React.Component {

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
    this.props.userLogIn(JSON.parse(decodeURI(user_string)))
      // Parses user string into JSON

    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  // Button to handle login with Facebook
  loginWithFacebook = () => this.openURL('http://10.150.30.130:3000/auth/facebook');

  // Button to handle login with Google
  loginWithGoogle = () => this.openURL('http://10.150.30.130:3000/auth/google');


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
    const { user } = this.props;
    return (  
        <View style={styles.container}>
            {
                user ? <Home /> : <Login loginWithFacebook={this.loginWithFacebook} loginWithGoogle={this.loginWithGoogle} />
            }
        </View>         
    ) 
  }
}



const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: 'black'
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
