import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  ImageBackground,
  Linking,
  Button,
  ScrollView
} from 'react-native';



import Login from './Login'



export default class Profile extends React.Component {
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
      <ImageBackground source={require('./loginbackground.jpg')} style={styles.container} >
        <React.Fragment>
          <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.avatar}>
                <Image source={{ url: user.avatar}} style={{height: 50, width: 50, resizeMode: Image.resizeMode.contain, borderRadius: 5 }} />
                <Text style={styles.headerText}>My Info</Text>
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
            </View>
            <View style={styles.buttons}>
              <Button title="Log Out" onPress={() => this.props.userLogOut()} />
            </View>
          </View>
        </React.Fragment>
      </ImageBackground>
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
  },
  card: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '98%',
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'rgba(255,255,255,.2)',
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1.0

    
  },
  avatar: {
    // margin: 5,
    // marginTop: 18,
    shadowRadius: 12,
    shadowColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 5

  },
  avatarImage: {
    borderRadius: 0,
    width: '100%'
  },
  headerText:{
    fontFamily: 'Marker Felt',
    fontSize: 48,
    marginRight: '25%'
  },
  name: {
    width: '98%',
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
    fontSize: 24,
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
    width: '98%',
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1.0,
  }
});

           
            