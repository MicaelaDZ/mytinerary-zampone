const axios = require("axios")

const authAction = {

    signupUser: (name,lastName,email,password,photo,country,google ) => {
        return async (dispatch, getState) =>{
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signup",  {
                    name,
                    lastName,
                    email,
                    password,
                    photo,
                    country,
                    google:false,
                  })
                
                if(user.data.success && !user.data.error){
                   
                localStorage.setItem("token", user.data.response.token)
                   dispatch({type: "NEW_USER", payload: user})
                }else{
                    return{error: [{message:user.data.error}]}
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    signIn: (email,password) => {
        return async(dispatch,getState) => {
            
            try{
                
                const user = await axios.post("http://localhost:4000/api/auth/signin", {email,password})
                console.log(user)
                if(user.data.success && !user.data.error){
                    localStorage.setItem("token", user.data.response.token)
                    dispatch({type:"USER", payload: user})
                }else{
                    alert("User or password are not correct")
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
                const user = await axios.get("http://localhost:4000/api/auth/tokensign",{
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
            dispatch({type: "SIGN_OUT",payload: null})
        }
    }
    
    }


module.exports = authAction