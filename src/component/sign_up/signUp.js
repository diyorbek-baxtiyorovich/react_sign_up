import {useState} from 'react';
import './signUp.css'

const active = 'active'
const inactive = {}

const SignUp = () => {

    const [selected, setSelect] = useState(0);
    const prevClick = (num) => () => {
        setSelect(num);
    }
// eye add react 
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const handlePasswordChange = evnt =>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
    if(passwordType === "password")
    {
    setPasswordType("text")
    return;
    }
    setPasswordType("password")
    }

    // Confirm
    const handleConfirmChange = e => {
        setConfirmPassword(e.target.value)
    }
    const toggleConfirm =()=>{
        if(passwordType === "password")
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
                        <div className = {`IcInput ${selected === 1 ? active : inactive}`} onClick ={prevClick(1)}  >
                            <i class="fa-solid fa-envelope" ></i>
                            <input type="text" placeholder='Enter your email address' />
                        </div>                        
                    </label>
                    <label htmlFor="" className='label'>
                        <p className='form_text'>Username</p>
                        <div className = {`IcInput ${selected === 2 ? active : inactive}`} onClick ={prevClick(2)}>
                            <i class="fa-solid fa-user i"></i>
                            <input type="text" placeholder='Username' />
                        </div>                        
                    </label>
                    <label htmlFor="">
                        <p className='form_text'>Password</p>
                        <div className = {`IcInput ${selected === 3 ? active : inactive}`} onClick ={prevClick(3)} >
                            <i class="fa-solid fa-lock"></i>
                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" placeholder='Password' />
                            <div className='eye_icons' onClick={togglePassword}>
                                { passwordType === "password" ? <i class = "fa-solid fa-eye-slash"></i> : <i class = "fa-solid fa-eye"></i> }
                            </div>
                        </div>                        
                    </label>
                    <label htmlFor="/">
                        <p className='form_text'>Confirm Password</p>
                        <div className = {`IcInput ${selected === 4 ? active : inactive}`} onClick ={prevClick(4)}>
                            <i class="fa-solid fa-lock"></i>
                            <input  type={passwordType} onChange={handleConfirmChange} value={confirmPassword} name="Confirm password" placeholder='Confirm Password'  />
                            <div className='eye_icons' onClick={toggleConfirm}>
                                { passwordType === "password" ? <i class = "fa-solid fa-eye-slash"></i> : <i class = "fa-solid fa-eye"></i> }
                            </div>
                        </div>                        
                    </label>
                    <div className="buttom">
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>
            <div className="right_img_sign">
                {/* <div className='box-right'>
                    <span className='box_star'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <div className="box_text_right">
                        <h1 className='text_h1_right'>
                            ExpensiM 
                            <span className='text_span_min'>TM</span>
                        </h1>
                    </div>
                    <div className="last_text">
                        <h4>Sign Up to name</h4>
                        <p>Lorem Ipsum</p>
                    </div>
                </div> */}
                <img src={require('./rasmm.png')} alt="" />
            </div>
        </div>
    )
}

export default SignUp