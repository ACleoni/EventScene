import React from 'react'

import {
    LoginSuccess
} from './ProfileAction';

const userObject = (user) => {
    return JSON.parse(JSON.stringify(user))
}

const defaultState = { user: null };

const user = (state = defaultState, action) => {
    switch(action.type){
        case LoginSuccess:
            // newState = userObject(state);
            // newState.user.loggedIn = true;
            return {
                user: action.payload
            }

        default:
            return state;
    }
};

export default user;
