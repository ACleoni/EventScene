import React from 'react';
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

import axios from 'axios';


import Login from './Login'
import InteractiveMap from './InteractiveMap'



export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        user: this.props.user, // User is logged in
    } 
  } 
  static navigationOptions = {
    Title: 'Profile'
  }

  logUser = () => {
        console.log(this.state)
    }
  

  render() {
    const user=this.props.user
    return (
      
        <React.Fragment>
          <View style={styles.header}>
            <Text style={styles.headerText} >
              My Profile
            </Text>
          </View>
          <View style={styles.container}>
              <View style={styles.avatar}>
                <Image source={{ url: user.avatar}} style={{height: 50, width: 50, resizeMode: Image.resizeMode.contain, borderRadius: 10 }} />
                <Text style={styles.text}>You are currenlty in Atlanta, GA</Text>
              </View>
              <View style={styles.name}>
                <View style={styles.nameContainer}>
                  <Text style={styles.text}>Name</Text>
                </View>
                <View style={styles.userName}>
                <Text style={styles.text}>{user.first_name}</Text>
                </View>
              </View>
              <View style={styles.name}>
                <View style={styles.nameContainer}>
                  <Text style={styles.text}>Email</Text>
                </View>
                <View style={styles.userName}>
                <Text style={styles.text}>{user.email}</Text>
                </View>
              </View>
              <View style={styles.name}>
                <View style={styles.nameContainer}>
                  <Text style={styles.text}>Logged in with</Text>
                </View>
                <View style={styles.userName}>
                <Text style={styles.text}>{user.passport}</Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <Button title="Log Out" onPress={() => this.props.userLogOut()} />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 15,
    paddingBottom: 15,
    paddingRight: 25
  },
  name: {
    width: '95%',
    margin: 5,
    borderColor: 'grey',
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1.0,
    opacity: .8
  },
  nameContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    opacity: .5,
    paddingBottom: 5,
    paddingLeft: 5
  },
  userName: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 5,
    paddingLeft: 5
  },
  header: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1.0
  },
  headerText: {
    fontSize: 22,
    fontFamily: 'Noteworthy'
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 22,
    marginTop: 15,
    fontWeight: '700'
  },
  buttons: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightcoral',
    marginBottom: 30,
    borderRadius: 5,
    height: 50,
    width: '95%',
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1.0,
  }
});

           
            