import React,{useState} from 'react'
import { FaCartPlus,  FaEnvelope,  FaFacebook,  FaFacebookMessenger,  FaHamburger,  FaInstagram,  FaPhone, FaPinterest, FaSearch, FaTiktok, FaUser, FaVoicemail,  } from 'react-icons/fa';

import {Link} from 'react-router-dom'
import './App.css'
const Navbar = () => {
    const [isClicked,setisClicked]=useState(false)
    function okClicked(){
        setisClicked(!isClicked)
    }
  return (
<>

   <div className='stickey'> 
<div className='container-1'>

<div className='call'> <FaPhone size={15} color='#BBAB8C'/> <span className='text-1'>CALL US ON WHATSAPP: +923350841997</span></div>

<div className='container-2'>
<div className='small-div'> <FaSearch size={15}  color='#BBAB8C'/> <span className='text-1'>
<Link to='/Catalog' className='Link'> Search Products</Link>
    </span></div>
<div className='small-div'> <FaUser size={15}  color='#BBAB8C'/> <span className='text-1'>
  <Link to='/Login' className='Link'> My Account </Link>
   </span></div>
<div className='small-div'> <FaCartPlus size={15}  color='#BBAB8C'/> <span className='text-1'>
<Link to='/Cart' className='Link'>
Cart
</Link>
</span></div>
</div>

</div>
<nav>
    <div className='Logo'></div>
<div className='navbar1'>
    <ul>
        <li>
            <Link to='/' className='Link'>
        Home
        </Link>
        </li>
        <li>
            <Link to='/Catalog'  className='Link'>
        Catalog
        </Link>
        </li>
        <li> 
            <Link to='/Contact'  className='Link'>
        Contact Us
        </Link>
        </li>
    </ul>
    </div>
    <div className='hamburger' onClick={okClicked}>
      ≡  
     </div>
</nav>
</div>  
<div className={`res-menu ${isClicked ? 'menuu' : ''}`}>
<ul>
        <li>
            <Link to='/' className='Link'>
        Home
        </Link>
        </li>
        <li>
            <Link to='/Catalog'  className='Link'>
        Catalog
        </Link>
        </li>
        <li> 
            <Link to='/Contact'  className='Link'>
        Contact Us
        </Link>
        </li>
    </ul>
</div>
</>
  )
}

export default Navbar;

