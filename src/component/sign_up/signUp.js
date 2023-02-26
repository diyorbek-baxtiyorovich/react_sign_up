import {useState} from 'react';
import './signUp.css'

const active = 'active'
const inactive = {}

const SignUp = () => {

    // const [selected, setSelect] = useState(0);
    // const handleClick = () => {
    //     setIsActive();
    // };
    const [selected, setSelect] = useState(0);
    const prevClick = (num) => () => {
        setSelect(num);
    }
// eye add react 
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
    if(passwordType==="password")
    {
    setPasswordType("text")
    return;
    }
    setPasswordType("password")
    }

    return (
        <div className="sign_up">
            <div className="left_sign">
                <div className="sign_text">
                    <h2>Sign Up</h2>
                    <p>If you already have an account register </p>
                    <p>You can <a href="/">Login here !</a></p>
                </div>
                <form action="/" className='forms'>
                    <label htmlFor="" className='label'>
                        <p className='form_text'>Email</p> 
                        <div className = {`IcInput ${selected == 1 ? active : inactive}`} onClick ={prevClick(1)}  >
                            <i class="fa-solid fa-envelope" ></i>
                            <input type="text" placeholder='Enter your email address' />
                        </div>                        
                    </label>
                    <label htmlFor="" className='label'>
                        <p className='form_text'>Username</p>
                        <div className = {`IcInput ${selected == 2 ? active : inactive}`} onClick ={prevClick(2)}>
                            <i class="fa-solid fa-user i"></i>
                            <input type="text" placeholder='Username' />
                        </div>                        
                    </label>
                    <label htmlFor="">
                        <p className='form_text'>Password</p>
                        <div className = {`IcInput ${selected == 3 ? active : inactive}`} onClick ={prevClick(3)} >
                            <i class="fa-solid fa-lock"></i>
                            <input typtype={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" placeholder='Password' />
                            <div className='eye_icons' onClick={togglePassword}>
                                { passwordType == "password" ? <i class = "fa-solid fa-eye"></i> : <i class = "fa-solid fa-eye-slash"></i> }
                            </div>
                        </div>                        
                    </label>
                    <label htmlFor="/">
                        <p className='form_text'>Confirm Password</p>
                        <div className = {`IcInput ${selected == 4 ? active : inactive}`} onClick ={prevClick(4)}>
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder='Confirm Password' />
                            <span className='eye_icons' >
                                <i class="fa-solid fa-eye"></i>
                                <i class="fa-solid fa-eye-slash"></i>
                            </span>
                        </div>                        
                    </label>
                </form>
            </div>
            <div className="right_img_sign">
                <div>

                </div>
            </div>
        </div>
    )
}

export default SignUp