import React,{useState} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom'
import { FaCartPlus,  FaInfo,  FaPhone, FaCheck  } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [Show2,setShow2]=useState(false)
  const [Show,setShow]=useState(true)
  const [Show3,setShow3]=useState(false)
  const [Visible,setVisible]=useState(false)
                                                                                {/* slider */}
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <>
                                                                            {/* section hero */}
    <section className='hero'>
    <div className="carousel-container">
      <Slider {...settings}>
<div className='slider-1'>
<div className="flex-container">
      <div className="box-1">
        <img src='logo.png'></img>
        <div className='hero-text'>
        Find, Shop, <br></br>Enjoy        </div>
        <br/>
        
        <button className='btn-1'>Shop Now</button>
        <br/>
        
        <div className='btn-2'>
          <p>
        <FaPhone  color='#BBAB8C'className='icon'/>+923350841997
        
        </p>
        <p className='margin'>
        <FaInfo  color='#BBAB8C' className='icon'/> www.cuddlez.com
      
       </p>
        </div>
      </div>
      <div className="box-2"></div>
    </div>
    </div>
        <div className='slider-2'>
          <div className='container-7'>
            <div className='box'>
        <h3>The Cuddlez Culture</h3>
        <img src='logo.png' className='img1'></img>
        <h3>www.cuddlex.com</h3>
        </div>
          </div>
        </div>
        {/* <div className='slider-3'>
          <h3>Slide 3</h3>
        </div> */}
      </Slider>
    </div>
    </section>
                                                                            {/* section 1 */}
    <section className='sec-1'>
      <div className='text-4'>
      M O L T E S T O R E
      </div>
    <div className='line'>
  <span className='line-text'>
   The Shop
  </span>

</div>
<div className='text-5'>
  MOST-COVETED CLOTHING      </div>
<div className='text-6'>
<button className='btn-3'  onClick={() => {
    setShow3(false);
  setShow2(false);
  setShow(true);
}} >New Arrivals</button> 
<button className='btn-5'  onClick={() => {
    setShow3(false);
  setShow2(true);
  setShow(false);
}}>Latest Products</button> 
<button className='btn-3'  onClick={() => {
    setShow3(true);
  setShow2(false);
  setShow(false);
}}>Best Sellers</button> 
     </div>
     {
        Show?
       
              <>
              <div className='container-3'>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt1</p>
                <button ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt2</p>
                <button ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt3</p>
                <button ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt4</p>
                <button ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                </div>
                </> 
              :null
              
      }
      {
        Show2?
       
              <>
              <div className='container-4'>
              <div className='box-3'>
                <img src=''></img>
                <p>Shirt5</p>
                <button  ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
              </div>
              <div className='box-3'>       
                       <img src=''></img>
                <p>Shirt6</p>
                <button  ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button></div>
              <div className='box-3'>
              <img src=''></img>
                <p>Shirt7</p>
                <button ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
              </div>
              <div className='box-3'>
              <img src=''></img>
                <p>Shirt8</p>
                <button  ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
              </div>
              </div></> 
              :null
              
      }
            {
        Show3?
       
              <><div className='container-5'>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt9</p>
                <button  ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt10</p>
                <button  ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt11</p>
                <button  ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                <div className='box-3'>
                <img src=''></img>
                <p>Shirt12</p>
                <button  ><Link to='/Catalog'  className='Link'>
       View Products
        </Link></button>
                </div>
                </div></> 
              :null
              
      }

    
    </section>
                                                                                {/* section 2 */}
    <section className='sec-2'>
      <div className='container-8'>


        
        <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
   Cuddlez culture
  </span>

</div>
<div className='text-5'>
NEW COLLECTION</div>
<br/>
<div style={{textAlign:'center'}}>Immerse yourself in the enchanting realm of our Anime World collection, where passion meets fashion.</div>
        </div>
        <div className='img-box1'>
          <img src=''></img>
        </div>


        <div className='img-box1'>
          <img src=''></img>
        </div>
        <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
  RAVE
  </span>

</div>
{/* <div className='text-5'>
Our shirts and hoodies are crafted to be as dynamic as the music and lights that surround you</div> */}
<br/>
<div style={{textAlign:'center'}}>Our shirts and hoodies are crafted to be as dynamic as the music and lights that surround you</div>
        </div>



        
        <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
  GAME FREAK
  </span>

</div>
<div className='text-5'>
NEW COLLECTION</div>
<br/>
<div style={{textAlign:'center'}}>Dive into the pixelated universe of our Game Freak collection, where style meets the virtual realm.</div>
        </div>
        <div className='img-box1'>
          <img src=''></img>
        </div>


        

        <div className='img-box1'>
          <img src=''></img>
        </div>
        <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
   Cuddlez culture
  </span>

</div>
<div className='text-5'>
NEW COLLECTION</div>
<br/>
<div style={{textAlign:'center'}}>Immerse yourself in the enchanting realm of our Anime World collection, where passion meets fashion.</div>
        </div>


        
        <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
  SUFI
  </span>

</div>
<div className='text-5'>
NEW COLLECTION</div>
<br/>
<div style={{textAlign:'center'}}>Step into the soulful world of our Sufi collection, where Urdu poetry weaves a tapestry of emotions and spirituality.</div>
        </div>
        <div className='img-box1'>
          <img src=''></img>
        </div>


        <div className='img-box1'>
          <img src=''></img>
        </div>
                <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
  BEAST MODE
  </span>

</div>
<div className='text-5'>
NEW COLLECTION</div>
<br/>
<div style={{textAlign:'center'}}>Unleash Your Inner beast with our Beast Mode Collection, Designed for the dedicated gym enthusiast in pursuit of strength and style.</div>
        </div>


        
        <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
  CLASSIC
  </span>

</div>
<div className='text-5'>
NEW COLLECTION</div>
<br/>
<div style={{textAlign:'center'}}>Discover the understated charm of our shirts and hoodies, meticulously curated to embody the grace and sophistication of bygone eras.</div>
        </div>
        <div className='img-box1'>
          <img src=''></img>
        </div>

        <div className='img-box1'>
          <img src=''></img>
        </div>
           <div className='text-box1'>
        <div className='text-4'>
      M O L T E S T O R E
      </div>
      
    <div className='line'>
  <span className='line-text'>
  MOTIVATIONS
  </span>

</div>
<div className='text-5'>
NEW COLLECTION</div>
<br/>
<div style={{textAlign:'center'}}>Embark on a journey of self-inspiration with our Motivational collection, where every piece tells a story of resilience and triumph.</div>
        </div>
     




      </div>
    </section>

    {
  Visible ? (
    <section className='popup' >
      <div className='popup-main'>
        <div className='cross' onClick={() => setVisible(null)}>
          X
        </div>
        <div className='popup-container'>
     
          <div className='boxx'>
            <p style={{ fontSize: 15 }}>
              <FaCheck size={15} color='black' />
              Added to Cart
            </p>
            <div className='btnss' >
              <button onClick={() => setVisible(null)}>
                Continue Shopping
              </button>
              <button>
                <Link to='/Cart' style={{ textDecoration: 'none', color: 'black' }}>
                  Go To Cart
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null
}
    </>
  );
};

export default Carousel;
