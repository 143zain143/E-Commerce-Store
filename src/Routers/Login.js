import React from 'react';
import { FaCartPlus,  FaEnvelope,  FaInfo,  FaPhone, FaRetweet, FaSearch, FaStore, FaUser,  } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      useEffect(() => {
        // Retrieve data from local storage when the component mounts
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
          setFormData(JSON.parse(storedFormData));
        }
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));
    
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      };
    
  return (
    <>
    <div className='contact-container'>
  <div className='box-back'>
  <div style={{marginTop:7}}>
  <p><FaCartPlus   className='icons'/>
  <b>FREE SHIPPING</b>
  <br/>
  On orders over 10,000 PKR.
  </p>
  
  </div>
  <div style={{marginTop:7}}>
  <p><FaRetweet className='icons'/>
  <b>ORDER RETURN</b>
  <br/>
  Returns within 7 days
  </p>
  </div>
  <div style={{marginTop:7}}>
  <p><FaPhone size={20} className='icons'/>
  <b>SUPPORT 24/7</b>
  <br/>
  Online Support Services
  </p>
  </div>
  </div>
</div>
<div className='form'>

      <form onSubmit={handleSubmit}>
        <div>
            <p>Email Address:</p>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email Address*'
            value={formData.email}
            onChange={handleChange}
            required
            className='input-contact'
          />
        </div>
        <br/>
        <br/>
        <div>
            <p>Password:</p>
          <label htmlFor="subject"></label>
          <input
            type="Password"
            id="subject"
            name="subject"
            placeholder='Password*'
            value={formData.subject}
            onChange={handleChange}
            required
            className='input-contact'
          />
        </div>
        <br/>
        <button type="submit" style={{width:150}}>Login In / Sign up</button>
      </form>
    </div>
    </>
  )
}

export default Login