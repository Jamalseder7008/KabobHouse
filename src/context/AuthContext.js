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
        default:state;
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

const signout = (dispatch) => {
    return ({email, password}) => {
        //somehow signout
    }
}

export const {Provider,Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
);