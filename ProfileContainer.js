import { connect } from 'react-redux';
import Profile from './Profile';

// import {
//     login
// } from './ProfileAction'


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }


export default connect(mapStateToProps)(Profile)