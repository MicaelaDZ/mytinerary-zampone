import axios from 'axios'
import {toast} from 'react-toastify';

const authAction = {

    signupUser: (newUser) => {
        return async (dispatch, getState) =>{
            try {
                const user = await axios.post("https://mytinerary-zampone.herokuapp.com/api/auth/signup",  {
                    ...newUser})
                
                if(user.data.success && !user.data.error){
                    console.log(user)
                    toast.success("Hello " + user.data.response.newUser.name, {
                        position: toast.POSITION.TOP_CENTER,
                       icon: "👌"
                    }) 
                localStorage.setItem("token", user.data.response.token)
                dispatch({type: "NEW_USER", payload: user})
                }else{
                    toast.error(user.data.response)
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    signIn: (email,password) => {
        return async(dispatch,getState) => {
            try{                
                const user = await axios.post("https://mytinerary-zampone.herokuapp.com/api/auth/signin", {email,password})
                console.log(user)
                if(user.data.success && !user.data.error){
                    localStorage.setItem("token", user.data.response.token)
                    toast.success("Welcome " + user.data.response.name, {
                        position: toast.POSITION.TOP_CENTER,
                       icon: "👌"
                    })
                    dispatch({type:"USER", payload: user})
                }else{
                    toast.error(user.data.error)
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    signInToken:()=>{
        return async(dispatch, getState)=>{
            try{
                const token = localStorage.getItem("token")
                const user = await axios.get("https://mytinerary-zampone.herokuapp.com/api/auth",{
                headers:{
                    Authorization: `Bearer ${token}`}
            })
            dispatch({type:"TOKEN", payload: user.data})
           
        }catch (error){
           console.log(error)
        }
        }
    },
    
    signOut: () => {
        localStorage.removeItem("token")
        return (dispatch, getState)=>{
            dispatch({type: "SIGN_OUT",payload: ""})
        }
    }
    
    }


export default authAction