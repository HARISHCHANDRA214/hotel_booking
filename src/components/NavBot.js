import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, Login, Person, SearchOutlined } from '@mui/icons-material';
import { useState } from "react";

function NavBot(){
    
    const [prof, setProf]=useState(false);


    //toggle profile

    if(prof==true){
        document.getElementById('_4').style.display="block";
        document.getElementById('_3').style.display="none";
    }

    return(
        <div class="div_bot_nav">
            <span><Link to="/">&nbsp;&nbsp;<SearchOutlined/><br/>Explore</Link></span>
            <span><Link to="/wishlist">&nbsp;&nbsp;&nbsp;<FavoriteBorderOutlined/><br/>Wishlist</Link></span>
            <span id="_3" style={{display: "block"}}><Link to="/login">&nbsp;<Login/><br/>Log in</Link></span>
            <span id="_4" style={{display: "none"}}><Link to="/profilepage">&nbsp;<Person/><br/>Profile</Link></span>
        </div>
    )
}

export default NavBot;