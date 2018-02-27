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

export default class App extends React.Component {
  state = {
    user: undefined // User has not signed in yet
  };

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
  loginWithFacebook = () => this.openURL('http://alex.local:3000/auth/facebook');

  // Button to handle login with Google
  loginWithGoogle = () => this.openURL('http://alex.local:3000/auth/google');


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
      <ImageBackground source={require('./mainbackground.jpg')} style={styles.container} >
        <View style={styles.container}>
          { user 
            ?
              <View style={styles.content}>
                <Text style={styles.header}>
                  Welcome {user.name}!
                </Text>
                <View style={styles.avatar}>
                  <Image source={{ uri: user.avatar}} style={styles.avatarImage} />
                </View>
              </View>
            :
              <View style={styles.content}>
                <Text style={styles.header}>
                  Welcome Stranger!
                </Text>
                <View style={styles.avatar}>
                  <Icon name="user-circle" size={100} color="white" />
                </View>
                <Text style={styles.text}>
                  Please log in to continue {'\n'}
                  to see what's in your city!
                </Text>
              </View>
          }
          {/*Login Buttons*/}
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    margin: 20
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
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
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30
  }
});