import { AppRegistry } from 'react-native';
import App from './AppContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import user from './ProfileReducer'
import React from 'react'
import Tabs from './Navigation';

const store = createStore(user)
const MainApp = (props) => {
    return (
        <React.Fragment>
        <Provider store={store}>
            <App />
        </Provider>
        </React.Fragment>
    )
}

console.ignoredYellowBox = ['Remote debugger'];

AppRegistry.registerComponent('EventScene', () => MainApp);
