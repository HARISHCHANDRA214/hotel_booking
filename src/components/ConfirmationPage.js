import { ArrowBackIos, Star } from "@mui/icons-material";
import "./ConfirmationPage.css";
import { Link } from "react-router-dom";
import "./LoginPage.js"
import LoginPage from "./LoginPage.js";

function ConfirmationPage(){
    return(
    <>
        <div class="top_sticky"><Link to="/booking"><ArrowBackIos/></Link> Confirm and pay</div>
        <div class="confirmpage_contents">
            <div>
                <div class="info">
                    <img src='https://a0.muscache.com/im/pictures/60d4058e-98a8-4f30-ba8a-93b101a31c47.jpg?im_w=720'></img>
                    <div>
                        <span class="small_words">Entire rental unit</span><br/>
                        <span>Lovely Studio with beautiful view with nature</span><br/>
                        <span class="rating"><Star style={{height: "17%", width: "10%"}}/>5.00</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="margin">
                    <h1 class="h1">Your trip</h1>
                    <div class="flex"><span><b>Dates</b><br/>6-11 Oct</span><span><b style={{textDecoration: "underline"}}>Edit</b></span></div>
                    <div class="flex"><span><b>Guests</b><br/>1 guest</span><span><b style={{textDecoration: "underline"}}>Edit</b></span></div>
                </div>
            </div>
            <div>
                <div class="margin">
                    <h1 class="h1">Price details</h1>
                    <div class="flex"><span>Rs.10,375.33 x 5 nights</span><span>Rs.51,876.67</span></div>
                    <div class="flex"><span>Cleaning fee</span><span>Rs.4,524.79</span></div>
                    <div class="flex"><span>Airbnb service fee</span><span>Rs7,962.49</span></div>
                    <div style={{height: "1px", backgroundColor: "rgb(228, 225, 225)"}}></div>
                    <div class="flex"><span><b>Total(INR)</b></span><span><b>Rs.64,363.95<br/></b></span></div>
                    <div style={{textAlign: "right"}}><b style={{textDecoration: "underline"}}>More info</b></div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Link to="/hotel_booking" class="request_book">
                        Request to book
                </Link>
            </div>
            <div style={{display:"none"}} class="confirmation_login_page">
                <LoginPage/>
            </div>
        </div>
    </>
    )
}

export default ConfirmationPage;