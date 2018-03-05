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


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        user: this.props.user // User is logged in 
  }
}
  static navigationOptions = {
    Title: 'Profile'
  }

  render() {
    const user=this.props.user
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.label}>
            <View style={styles.avatar}>
              <Image source={{ uri: user.avatar}} style={styles.avatarImage} />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Hi {user.first_name}!</Text>
              <Text>Logged in with {user.email}</Text>
            </View>
              <Image source={require('./iphone-app-3x.png')} style={{width: 70, height: 70, marginTop: 10}}/>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'aliceblue'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
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
    flexDirection: 'column',
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
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 26,
    marginTop: 30
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
    margin: 10,
    marginBottom: 30
  }
});

           
            