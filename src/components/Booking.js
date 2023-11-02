import './Booking.css';
import { ArrowBack, ArrowBackIos, CalendarMonthOutlined, FavoriteBorderOutlined, LocationCityOutlined, ShareOutlined} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Booking() {
    return(
    <>
        <div className='top'>
            <div>
                <Link to='/'><ArrowBackIos/></Link>
            </div>
            <div className='top_two'>
                <ShareOutlined/>
                <FavoriteBorderOutlined/>
            </div>
        </div>
        <body className='booking_body'>
            <div className='booking_image'>
                <img src='https://a0.muscache.com/im/pictures/miso/Hosting-20605023/original/0be3f493-fd2d-434e-b557-ad2c189b1543.jpeg?im_w=720'/>
                <div className='booking_data'>
                    <h1>Yellow Submarine</h1><br/>
                    adfasfdasfasdfsafasfasdfsadf<br/>
                    Marton, Manawatu-Wanganui, New Zealand
                </div>
            </div>
            <div className='booking_data'>
                <b>This is a rare find.</b> Keith & Jen's place<br/>
                on Airbnb is usually fully booked.
            </div>
            <div className='booking_data'>
                <p><h1>Entire place hosted by Keith & Jen</h1></p>
                <p>4 guests, 1 bedroom, 2 beds, 1 bathroom</p>
            </div>
            <div className='booking_data'>
                <LocationCityOutlined/> <b>Great location</b><br/>
                95% of recent guests gave the location a 5-star rating.<br/>
                <CalendarMonthOutlined/><b>Free cancellation before 30 Sep.</b>
            </div>
            <div className='booking_data'>
                NO CLEANING FEE<br/>
                Ticked off your bucket list, but still need more?<br/>
                1960's:All aboard for the magical mustery tour with the Beastles and their Yellow Submarine, powered by love; becausesadfsadfasfd asdfasdfasdf asd fsadf asdf sa 
            </div>
            <div class='booking_data'></div>
            <div class="reserve">
                <div><b>$10,375</b> night<br/><b>6-11 Oct</b></div>
                <div><Link to="/confirmationpage" style={{
                    backgroundColor: "rgb(249, 39, 113)",
                    borderRadius: "10px",
                    padding: "25% 50%",
                    position: "relative",
                    bottom: "-20%",
                    right: "45%",
                    color: "white",
                    fontWeight: "600",
                    textDecoration: "none"
                    }}>Reserve</Link></div>
            </div>
        </body>
    </>
    )
}

export default Booking;