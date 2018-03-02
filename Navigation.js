import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from './ProfileContainer';
import InteractiveMap from './InteractiveMap';

const Tabs = TabNavigator({
    Map: {screen: InteractiveMap,
    navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: <Icon name ="map" size={35} color='lightskyblue' /> }
    },
    Profile: {screen: Profile,
    navigationOptions: {
        tabBarLabel: 'My Events',
        tabBarIcon: <Icon name ="account-circle" size={35} color='lightskyblue' /> }
    }
},{
    tabBarPosition: 'bottom'
})

export default Tabs;