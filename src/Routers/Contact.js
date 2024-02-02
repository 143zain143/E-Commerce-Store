import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaCartPlus,  FaEnvelope,  FaInfo,  FaPhone, FaRetweet, FaSearch, FaStore, FaUser,  } from 'react-icons/fa';
const Contact = () => {
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
<div style={{marginTop:50, textAlign:'center',fontSize:30,fontWeight:700,color:'#9d6c0a',}}>
  Contact
</div>
<div className='contact-container'>
  <div className='box-back2'>
  <div style={{fontFamily:'Cormorant Garamond'}}>
  <p><FaStore   className='icons'/>
  <b>ADDRESS</b>
  <br/>
 Valencia Town, Lahore
  </p>
  
  </div>
  <div style={{fontFamily:'Cormorant Garamond'}}>
  <p><FaEnvelope className='icons'/>
  <b>EMAIL:</b>
  <br/>
  info.Cuddlez@gmail.com
  </p>
  </div>
  <div style={{fontFamily:'Cormorant Garamond'}}>
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
          <p>Name:</p>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name*'
            value={formData.name}
            onChange={handleChange}
            required
            className='input-contact'
          />
        </div>
        <br/>
        <br/>
        <div>
          <p>Email:</p>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email*'
            value={formData.email}
            onChange={handleChange}
            required
            className='input-contact'
          />
        </div>
        <br/>
        <br/>
        <div>
          <p>Subject:</p>
          <label htmlFor="subject"></label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder='Subject*'
            value={formData.subject}
            onChange={handleChange}
            required
            className='input-contact'
            style={{color:'black'}}
          />
        </div>
        <br/>
        <br/>
        <div>
          <label htmlFor="message"></label>
          <p>Message:</p>
          <textarea
            id="message"
            name="message"
            placeholder='Type your message*'
            value={formData.message}
            onChange={handleChange}
            required
            className='input-contact1'
          ></textarea>
        </div>
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
</> 
 )
}

export default Contact