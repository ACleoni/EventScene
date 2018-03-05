import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from './ProfileContainer';
import InteractiveMap from './InteractiveMap';
import Feed from './Feed';

const Tabs = TabNavigator({
    Map: {screen: InteractiveMap,
    navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: <Icon name ="map" size={35} color='lightskyblue' reverse={true} raised={true} /> }
    },
    Feed: {screen: Feed,
    navigationOptions: {
        tabBarLabel: 'My Events',
        tabBarIcon: <Icon name ="list" size={35} color='lightskyblue' reverse={true} raised={true}  /> }
    },
    Profile: {screen: Profile,
    navigationOptions: {
        tabBarLabel: 'My Info',
        tabBarIcon: <Icon name ="account-circle" size={35} color='lightskyblue' reverse={true} raised={true}  /> }
    },
})

export default Tabs;