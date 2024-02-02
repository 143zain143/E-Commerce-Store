import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus,  FaEnvelope,  FaFacebook,  FaFacebookMessenger,  FaInstagram,  FaPhone, FaPinterest, FaSearch, FaTiktok, FaUser, FaVoicemail,  } from 'react-icons/fa';
import { Routes, Route, BrowserRouter  } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar';
import Home from './Routers/Home';
import Catalog from './Routers/Catalog';
import Contact from './Routers/Contact';
import Login from  './Routers/Login';
import Cart from './Routers/Cart'

const PageVisibility = () => {
  const pageTitle = document.title;

  useEffect(() => {
    const changeTitle = () => {
      const hiddenProperty = 'hidden' in document ? 'hidden' :
        'webkitHidden' in document ? 'webkitHidden' :
        'mozHidden' in document ? 'mozHidden' :
        null;
      const visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
      const onVisibilityChange = () => {
        if (document[hiddenProperty]) {
          document.title = 'Your absence hurts 😔';
        } else {
          document.title = pageTitle;
        }
      };
      document.addEventListener(visibilityChangeEvent, onVisibilityChange);
      return () => {
        document.removeEventListener(visibilityChangeEvent, onVisibilityChange);
      };
    };
    changeTitle();
    return () => {
      document.title = pageTitle; 
    };
  }, [pageTitle]);

  return (
    <>
     <BrowserRouter>
  <section>

   
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/Catalog' Component={Catalog}/>
      <Route path='/Contact' Component={Contact} />
      <Route path='/Login' Component={Login} />
      <Route path='/Cart' Component={Cart} />
      {/* <Route path="/Cart/:data" component={Cart} /> */}
    </Routes>
   
    </section>
    <footer>
      <h6 className='discount'>
      GET 10% OFF YOUR NEXT PURCHASE.
      </h6>

      <div className='input-box'>
        <span>
      <input type='text'placeholder='Enter your email'/>
      <button><FaEnvelope size={15}  color='#BBAB8C'/> </button>
      </span>
      
      <div className='connect'>
      <h5>Connect</h5>
      <div className='links'>
        <p><FaFacebook size={15}  color='#BBAB8C'/></p>
        <p><FaTiktok size={15}  color='#BBAB8C'/></p>
        <p><FaPinterest size={15}  color='#BBAB8C'/></p>
        <p><FaInstagram size={15}  color='#BBAB8C'/></p>
        </div>
      </div>
      </div>

      <div className='quick-link'>
      <div className='footer-ul'>
        <div>
            <Link to='/' className='Link2'>
        Home
        </Link>
        </div>
        <div>
            <Link to='/Catalog'  className='Link2'>
        Catalog
        </Link>
        </div>
        <div> 
            <Link to='/Contact'  className='Link2'>
        Contact Us
        </Link>
        </div>
    </div>
      </div>
    
      <div className='copyright'>Copyright © 2023 By Cuddlez. All Rights Reserved.</div>

    </footer>
    </BrowserRouter>


    </>
  );
};

export default PageVisibility;
