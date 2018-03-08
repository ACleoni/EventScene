import { connect } from 'react-redux';
import Profile from './Profile';

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
        userLogOut: (user) => {
            console.log('User has logged out successfully')
            dispatch(createLoginAction(null));
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)