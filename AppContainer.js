import { connect } from 'react-redux';
import App from './App'

import {
    createLoginAction
} from './ProfileAction';

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogIn: (user) => {
            console.log('User has logged in successfully')
            dispatch(createLoginAction(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)