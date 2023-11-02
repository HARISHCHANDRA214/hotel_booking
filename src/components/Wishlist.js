import { Link } from "react-router-dom";
import './Wishlist.css';
import NavBot from "./NavBot";

function Wishlist(){
    return(
    <>
        <div class="wishlist">
            <h1>Wishlists</h1>
            <h3>Log in to view your wishlists</h3>
            You can create, view, or edit wishlists once you've logged in.<br/>
            <br/><div class="link"><Link to="/" style={{textDecoration : "none", color : "white"}}>Log in</Link></div>
        </div>
        <NavBot/>
    </>
    )
}

export default Wishlist;