import {Link} from 'react-router-dom';


export default function SignupComponent(){
    return(
        <>
        <div className="formulario">
        
        <form className="form">  
        <legend>Sign Up</legend>         
            <label for="name" className="">First Name</label>
            <input type="text" className=""  id="name" />
            <label for="lastname" className="">Last Name</label>
            <input type="text" className=""  id="lastname" />
            <label for="email" className="" >Email </label>
            <input type="email" className="" id="email" />
            <label for="pass" className="">Password</label>
            <input type="password" className=""  id="pass" />
            <label for="img" className="">Picture (url) </label>
            <input type="url" className=""  id="img" />
            <label for="cars">Choose a country:</label>
            <select name="cars" id="cars">
              <option value="volvo">Argentina</option>
              <option value="saab">Ireland</option>
              <option value="mercedes">Mexico</option>
              <option value="audi">France</option>
            </select>
            <button className="btn btn-warning p-1 fs-small btn-form" id="">Sign Up</button>
            <div className="already">
              <p>Already have an account? </p>
              <Link to='/'><span> Sign in here!</span></Link>            
            </div>
            <div className="google">
            <p>Sign up with Google</p>
            <Link to='/'><span> Google</span></Link>
            </div>
        </form>
        </div>
       
      </>
      
    )
}