import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";


const authReducer = (state,action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return{errorMessage: '', token:action.payload};
        case 'signin':
            return{errorMessage: '', token:action.payload};
        case 'signout':
            return {token: null, errorMessage: ''}
        case 'get_email':
            return {state}
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        default:state;
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({type:'signin', payload:token});
            navigate('Home');
        }
        else{
            navigate('loginFlow');
        }
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {

        //use express api request to sign up
    try{
        const response = await trackerApi.post('/signup', {email,password});
        //console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type:'signup', payload: response.data.token});
        navigate('Home');
    }catch(err){
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
    }
    
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        //use express api request to sign up
        try{
            const response = await trackerApi.post('/signin', {email,password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signin', payload: response.data.token});
            navigate('Home');
        }catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with sign in'})
        }
    }
}
const getEmail = (dispatch) => {
    return({email}) => {
        dispatch({type: 'get_email'})
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({type: 'clear_error_message'})
    }
}

const signout = (dispatch) => {
    return async () => {
        //somehow signout
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('loginFlow');
    }
}

export const {Provider,Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin, getEmail},
    {token: null, errorMessage: ''}
);