import axios from 'axios';

const authAction = {

    postUser: (email, password) => {
        return async (dispatch, getState) =>{
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signup"),{email,password}
               if(user.data.success && !user.data.error){
                   localStorage.setItem("token", user.data.response.token)
                   dispatch({type: "NEW_USER", payload:{email}})
                }else{
                    return{error: [{message:user.data.error}]}
                }
            }catch(error){

            }
        }
    },
    signIn: (email,password) => {
        return async(dispatch,getState) => {
            try{
                const user =await axios.post("http://localhost:4000/api/auth/signin"),{email,password}
                if(user.data.success && !user.data.error){
                    dispatch({type:"SIGN_USER", payload:{user: user.data.response}})
                }else{
                    alert("User or password are not correct")
                }
            }catch(error){

            }
        }
    }
}

export default authAction