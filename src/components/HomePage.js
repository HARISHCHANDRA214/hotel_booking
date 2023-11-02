import { FaAirbnb } from 'react-icons/fa';
import { AccountCircle, DensityMediumRounded, FavoriteBorderOutlined, Language, Map, Search, ToggleOff, ToggleOn, TuneOutlined } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import NavBot from './NavBot';

function HomePage() {
  const [check, setCheck]= useState(false);
  const body=document.body;
  let lastScroll=0;

  //scroll mechanism

  window.addEventListener('scroll',()=>{
    const currentScroll=window.scrollY;
    if(currentScroll>lastScroll && !body.classList.contains("scroll-down")){
      body.classList.remove("scroll-up")
      body.classList.add("scroll-down")
    }
    if(currentScroll<lastScroll && body.classList.contains("scroll-down")){
      body.classList.remove("scroll-down")
      body.classList.add("scroll-up")
    }
    lastScroll=currentScroll;
  })

  //toggle price
  
  function togglePrice(){
    setCheck(!check);
  }

  return (
    <body className='body'>
      <div class="sticky">
        <div class="div_header">
          <div class="div_airbnb" style={{fontFamily: 'Georgia, serif'}}>
            <Link to='/' class="airbnb"><FaAirbnb style={{height: '1.5em' , width:'1.5em', margin:'-4%'}}/><div>airbnb</div></Link>
          </div>
          <div class="search">
            <div class="logo_search"><a href='#'><Search/></a></div>
            <div><b>Anywhere</b><br/>Any week, Any guests</div>
            <div class="logo_filter"><a href='#'><TuneOutlined/></a></div>
          </div>
          <div class="ch">
            <Link to='/' class="button">Airbnb your home</Link>
            <Link to='/' class="button"><Language/></Link>
            <Link to='/' class="button"><DensityMediumRounded/><AccountCircle/></Link>
          </div>
        </div>
        <div class="div_nav">
          <div class='navs'>
            <div><img src='https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg' alt='img not found' /><br/>OMG</div>
            <div><img src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' alt='img not found' /><br/>Countryside</div>
            <div><img src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg' alt='img not found' /><br/>Beachfront</div>
            <div><img src='https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg' alt='img not found' /><br/>Rooms</div>
            <div><img src='https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg' alt='img not found' /><br/>Golfing</div>
            <div><img src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' alt='img not found' /><br/>Amazing pools</div>
            <div><img src='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg' alt='img not found' /><br/>Farms</div>
            <div><img src='https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' alt='img not found' /><br/>Lakefront</div>
            <div><img src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' alt='img not found' /><br/>Amazing Viewes</div>
            <div><img src='https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' alt='img not found' /><br/>Cabins</div>
            <div><img src='https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg' alt='img not found' /><br/>Bed & breakfast</div>
            <div><img src='https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' alt='img not found' /><br/>Castles</div>
            <div><img src='https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg' alt='img not found' /><br/>Trending</div>
            <div><img src='https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg' alt='img not found' /><br/>Top of the world</div>
            <div><img src='https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' alt='img not found' /><br/>Tropical</div>
            <div><img src='https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg' alt='img not found' /><br/>Arctic</div>
            <div><img src='https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg' alt='img not found' /><br/>Tiny Homes</div>
            <div><img src='https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg' alt='img not found' /><br/>Luxe</div>
            <div><img src='https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg' alt='img not found' /><br/>Surfing</div>
            <div><img src='https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg' alt='img not found' /><br/>Caves</div>
          </div>
        </div>
      </div>
      <div class="display_content">
        <div class="display_total_price">
            <div class="text">
              <div><b>Display total price</b></div>
              <div>Includes all fees, before taxes</div>
            </div>
            <div class="logo_price">
              <span class="toggle" id="_1" onClick={togglePrice}>{check ? <ToggleOn/> : <ToggleOff/>}</span>
              {/* <span class="toggle" id="_2" onClick={togglePrice}></span> */}
            </div>
          </div><br/>
        <div class="display_content_horizontal">
          <div class="display_product">
            <Link to="/booking" style={{textDecoration: 'none', color:'black'}}>
              <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/c451144f-b581-4a78-a150-c89da33f8626.jpg?im_w=720' alt='img not found'/></div>
              <div class="product_details">
              <b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br>
              {check ?<span>1,39,160 total</span>: <span>13,916 night</span>}
              </div>
            </Link>
          </div>
          <div class="display_product">
            <Link to="/booking" style={{textDecoration: 'none', color:'black'}}>
              <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/miso/Hosting-20605023/original/0be3f493-fd2d-434e-b557-ad2c189b1543.jpeg?im_w=720' alt='img not found'/></div>
              <div class="product_details">
                <b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br>
                {check ?<span>1,39,160 total</span>: <span>13,916 night</span>}
              </div>
            </Link>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/60d4058e-98a8-4f30-ba8a-93b101a31c47.jpg?im_w=720' alt='img not found'/></div>
            <div class="product_details">
            <b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br>
            {check ?<span>1,39,160 total</span>: <span>13,916 night</span>}
            </div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/9b731de6-b8b6-4eae-aba2-631216bf1bfc.jpg?im_w=720' alt='img not found'/></div>
            <div class="product_details">
            <b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br>
            {check ?<span>1,39,160 total</span>: <span>13,916 night</span>}
            </div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br>
            {check ?<span>1,39,160 total</span>: <span>13,916 night</span>}
            </div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/miso/Hosting-43316780/original/e5f00c7b-ed64-4d88-b386-631ca1d42b92.jpeg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/miso/Hosting-661201204231662812/original/6bb13f64-bf25-43fa-b042-16c8ccf1c6bd.jpeg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/1587524e-f8f5-4c20-8507-c809dffda998.jpg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/c5282c79-8d6c-48f9-8d2c-68e80234e12b.jpeg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/ae441b77-ba8a-4cb3-b4b1-647b6376d776.jpg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/5712a3f2-2565-44a8-b59a-4aa613e04559.jpg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/miso/Hosting-46130832/original/65de82db-e347-461e-a66b-5d15f16afbe3.jpeg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/miso/Hosting-52068342/original/a02a7d4d-a1bc-418f-a6de-970d41beade0.jpeg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
          <div class="display_product">
            <div class="image"><Link class="fav"><FavoriteBorderOutlined/></Link><img src='https://a0.muscache.com/im/pictures/miso/Hosting-49716308/original/a62635b3-ee25-4933-b669-f49525f433ac.jpeg?im_w=720' alt='img not found'/></div>
            <div class="product_details"><b>Marton, New Zealand</b><br></br>1231 kilometers away<br></br>1-6 oct<br></br><span>13,916 night</span></div>
          </div>
        </div>
      </div>
      <div class="div_map">Map <Map/></div>
      <NavBot/>
    </body>
  );
}

export default HomePage;
