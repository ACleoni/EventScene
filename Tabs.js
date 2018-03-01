import React from 'react';
import Icon from 'react-native-elements'

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'

// import Login from './Login';
import Profile from './Profile';

export const Tabs = TabNavigator({
    // Home: { screen: Login },
    Profile: { screen: Profile }
    // Events: {screen: Events}
});

