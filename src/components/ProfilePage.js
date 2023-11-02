import "./ProfilePage.css"
import { Link } from "react-router-dom"; 
import { ArrowForwardIos, HealthAndSafetyOutlined, HelpOutlineOutlined, Person2Outlined, Redeem, Settings, SupportAgentRounded, TuneOutlined } from '@mui/icons-material';
import { FaAirbnb } from "react-icons/fa";
import NavBot from "./NavBot";

function ProfilePage(){

    return(
    <>
        <body class="profile_body">
            <div>
                <h1>Profile</h1>
                <Link class="profile" to="">
                    <span>
                        <span class="circle">N</span>
                        <span><span id="_1">Name</span><br/>Show profile</span>
                    </span>
                    <span><ArrowForwardIos style={{height: "30px", width: "22px"}}/></span>    
                </Link>
            </div>
            <div class="line"></div>
            <div class="link_container">
                <Link to=""><p class="card"><b>Airbnb your place</b><br/>It's simple to get set up and start earning.</p></Link>
                <Link to=""><p class="tri"><span><Person2Outlined/><span>Personal info</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
                <Link to=""><p class="tri"><span><Settings/><span>Account</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
            </div>
            <div class="line"></div>
            <div class="link_container">
                <h2>Hosting</h2>
                <Link to=""><p class="tri"><span><TuneOutlined/><span>Host a home</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
            </div>
            <div class="line"></div>
            <div class="link_container">
                <h2>Referrals & credits</h2>
                <Link to=""><p class="tri"><span><Redeem/><span>Refer a host</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
            </div>
            <div class="line"></div>
            <div class="link_container">
                <h2>Support</h2>
                <Link to=""><p class="tri"><span><HelpOutlineOutlined/><span>Visit the Help Centre</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
                <Link to=""><p class="tri"><span><HealthAndSafetyOutlined/><span>Get help with a safety issue</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
                <Link to=""><p class="tri"><span><SupportAgentRounded/><span>Report a neighbourhood concern</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
                <Link to=""><p class="tri"><span><FaAirbnb style={{height: "25px", width: "25px"}}/><span>How Airbnb works</span></span><span><ArrowForwardIos style={{height: "20px", width: "22px"}}/></span></p></Link>
            </div>
            <div class="line"></div>
            <div class="line"></div>
        </body>
        <NavBot/>
    </>
    )
}

export default ProfilePage;