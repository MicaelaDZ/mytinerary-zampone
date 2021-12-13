const axios = require("axios")

const authAction = {

    signupUser: (newUser) => {
        return async (dispatch, getState) =>{
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signup", {...newUser})
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
                    dispatch({type:"NEW_USER", payload: user})
                }else{
                    alert("User or password are not correct")
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    signInToken:(userToken)=>{
        return async(dispatch, getState)=>{
            try{
            const user = await axios.get("http://localhost:4000/api/auth/signInToken",{
                headers:{
                'Authorization':'Bearer '+ userToken
            }
            })
            if (user.data.success) {
                dispatch({type:"SIGN_IN", payload:{...user.data, token:userToken}})
            }else{
                return(user.data)
            }
        }catch (errores){
            dispatch({type:"SIGN_OUT",payload:{user:null}})
            return("noUser")
        }
        }
    },
    
    signOut: () => {
        return (dispatch, getState)=>{
            dispatch({type: "SIGN_OUT",payload:{user:null}})
        }
    }
    // fetchCountries: () =>{
    //     return async()=>{
    //         let response
    //         let error
    //         try{
    //             response = await axios.get("https://restcountries.com/v2/all?fields=name")
    //         }catch(error){
    //              response = [{name:"We could not find any country", index:0 }]
    //         }
    //             return({
    //                 success: !errores ? true:false,
    //                 response: !errores ? response.data : response,
    //                 error
    //             })
    //         }
    //     },
    }


module.exports = authAction