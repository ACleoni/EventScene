import React from 'react';
import Icon from 'react-native-elements'

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'

import Profile from './Profile';
// ßimport UserMap from './UserMap';

const Tabs = TabNavigator({
    // UserMap: { Screen: UserMap },
    Profile: { screen: Profile}

});

export default Tabs;

