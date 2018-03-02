import React from 'react';

export const LoginSuccess = 'Logged In'
export const LoginError = 'Error'

export const createLoginAction = (user) =>{
    return {
        type: LoginSuccess,
        payload: user
    } 
}

export const createError = () =>{
    return {
        type: LoginError
    }
}