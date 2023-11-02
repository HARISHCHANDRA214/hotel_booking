import "./LoginPage.css";
import { Link } from "react-router-dom";
import { Apple, Facebook, Google, Mail } from '@mui/icons-material';
import NavBot from "./NavBot";

function LoginPage(){

    return(
    <>
        <div class="login_top">
            Log in or sign up to book
        </div>
        <div class="login_body">
            <h1>Welcome to Airbnb</h1>
            <div class="input">
                <input class="country"></input>
                <input class="number" placeholder="Phone number"></input>
            </div>
            <p>We'll call or text you to confirm your number. Standard message and data rates apply.<Link to="" style={{color: "black"}}>Privacy Policy</Link></p>
            <div class="continue">Continue</div>
            <p class="or"><span>or</span></p>
            <div class="alternative">
                <div class="options"><Facebook/>Continue with Facebook</div>
                <div class="options"><Google/>Continue with Google</div>
                <div class="options"><Apple/>Continue with Apple</div>
                <div class="options"><Mail/>Continue with email</div>
            </div>
        </div>
        <div class="login_bot"><Link to="#" style={{color: "black", fontWeight: "600"}}>Need help?</Link></div>
        <NavBot/>
    </>
    )
}

export default LoginPage;