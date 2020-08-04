import {api, types} from '../../constants/index';
import axios from 'axios';
import {toast} from "react-toastify";


export const login =(data) => async dispatch =>{
    try{
        // await axios.post(api.base_url,data);

        const response = await axios.post(api.base_url,data);
        
    dispatch({type: types.loggedIn, payload: true});
    dispatch({type: types.user, payload: response.data.data.user});
    const token = response.data.data.token;
  
    localStorage.setItem('token', token );

    // return response;
    
    }catch(err){
        const {response} = err;
        if (response && response.status === 400) {
            toast.error(response.data.message,{
                
            });
        }
        // throw err;
    }

   
} 