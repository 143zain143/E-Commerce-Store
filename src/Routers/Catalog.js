import React,{useState} from 'react'
// import CartProvider from './CartContextss';
import {Link} from 'react-router-dom'
import { FaCartPlus,FaCheck, FaPhone, FaRetweet, FaWindows,  } from 'react-icons/fa';


const Catalog  = () => {

  const [products, setProducts] = useState([
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200,button:'Add to Cart', value:1,id:1},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:2,id:2},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:3,id:3},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:5,id:4},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:6,id:5},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:7,id:6},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:8,id:7},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:9,id:8},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:10,id:9},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:11,id:10},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:12,id:11},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:13,id:12},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:14,id:13},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:15,id:14},
    {URL:'https://i.pinimg.com/564x/1b/0e/00/1b0e00e0dac9b34723cbbe3d55088a24.jpg',name:'Man Slogan Graphic Jacket',price:200 ,button:'Add to Cart', value:16,id:15},
  ]);

  const [sortOrder, setSortOrder] = useState('featured');

  const handleSort = (event) => {
    const value = event.target.value;
    setSortOrder(value);

    let sortedProducts = [...products];

    if (value === 'highToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  };

 

  // const products=[
  //   {URL:'',name:'Man Slogan Graphic Jacket',price:200,button:'Add to Cart', value:1,id:1},
  //   {URL:'',name:'shirt2',price:200 ,button:'Add to Cart', value:2,id:2},
  //   {URL:'',name:'shirt3',price:200 ,button:'Add to Cart', value:3,id:3},
  //   {URL:'',name:'shirt4',price:200 ,button:'Add to Cart', value:5,id:4},
  //   {URL:'',name:'shirt5',price:200 ,button:'Add to Cart', value:6,id:5},
  //   {URL:'',name:'shirt6',price:200 ,button:'Add to Cart', value:7,id:6},
  //   {URL:'',name:'shirt7',price:200 ,button:'Add to Cart', value:8,id:7},
  //   {URL:'',name:'shirt8',price:200 ,button:'Add to Cart', value:9,id:8},
  //   {URL:'',name:'shirt9',price:200 ,button:'Add to Cart', value:10,id:9},
  //   {URL:'',name:'shirt10',price:200 ,button:'Add to Cart', value:11,id:10},
  //   {URL:'',name:'shirt11',price:200 ,button:'Add to Cart', value:12,id:11},
  //   {URL:'',name:'shirt13',price:200 ,button:'Add to Cart', value:13,id:12},
  //   {URL:'',name:'shirt14',price:200 ,button:'Add to Cart', value:14,id:13},
  //   {URL:'',name:'shirt15',price:200 ,button:'Add to Cart', value:15,id:14},
  //   {URL:'',name:'shirt16',price:200 ,button:'Add to Cart', value:16,id:15},

  // ]
  const store=[...products]
  localStorage.setItem('storeProducts', JSON.stringify(store));



  const handleAddToCart = (item) => {
    const existingItems = JSON.parse(localStorage.getItem('selectTocart'));
  
    if (existingItems) {
      // Logic to handle not overwriting - for instance, adding multiple items to a cart array
      // For example, you could push the new item to the existing array
      existingItems.push(item);
      localStorage.setItem('selectTocart', JSON.stringify(existingItems));
    } else {
      // If no existing items, simply set the current item in local storage
      localStorage.setItem('selectTocart', JSON.stringify([item]));
    }
  
    console.log(item);
  };
  



 




  const [searchTerm, setSearchTerm] = useState('');
  const [Stylechange,setStylechange]=useState(false)
  const [count,setCount]=useState(0)
  const [Visible,setVisible]=useState(false)


;

  function Stylereverse(){
    setStylechange(true)
  }
  function Stylereverse2(){
    setStylechange(false)
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())

    
  );

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
<div style={{fontSize:20, fontWeight:700,marginTop:50,display:'flex',alignItems:'center',justifyContent:'center' }}>GRIDVIEW</div>
<div className='box-grid'>

  <div style={{display:'flex',gap:20,}}>
    <p>Sort</p>
    <select style={{height:25}} >
     
      <option value="featured">Featured</option>

      <option value="highToLow">Price:High to Low</option>
      <option value="lowToHigh">Price: Low to High</option>
    </select>
  </div>
  <div style={{display:'flex',gap:10,}}>
  <p>Per Page</p>
    <select style={{height:25}}>
     
      <option>12</option>
      <option>24</option>
      <option>48</option>
    
    </select>
  </div>
  <div className='display-no'>
    <p>View as</p>
    
    <button style={{height:30, width:30, display:'flex',justifyContent:'center',alignItems:'center'}}><FaWindows  size={15} color='black' onClick={Stylereverse2}/></button>
    <button  style={{height:30, width:30, fontSize:20 , display:'flex',justifyContent:'center',alignItems:'center'}} onClick={Stylereverse}>
      ≡  
    </button>
  </div>
</div>
<div className='search-product'>
  <input type='text' placeholder='   Search Products' className='input-shirts'         value={searchTerm}
       onChange={handleSearch} ></input>
  {/* <button><FaSearch size={15}  color='#BBAB8C'/></button> */}
</div>
<p className='pro'>Our Products</p>
<section className='products'>

<div className = 'products-box' >

{
 
filteredProducts.map((item, index) => (
      <div className={ `product-boxs ${Stylechange? 'products-style' : ''} `}   key={index}>
        
        <img src={item.URL} className={ `imgro ${Stylechange? 'img2ro' : ''} `}/>
        <div className={ `ro ${Stylechange? 'ro2' : ''} `}>
        <p style={{textAlign:'center'}}>{item.name}</p>
        <p style={{textAlign:'center'}}> Price:${item.price}</p>
        <div className='increment'>
        <button onClick={() => setCount(prevCount => prevCount > -0 ? prevCount - 1 : 0)}>-</button>
          <p>{count}</p>
          <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <button onClick={() => {setVisible(item); handleAddToCart(item);}}>Add to Cart</button>


        </div>
        </div>

     
    ))
  }
  
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
          <img src={Visible.URL} style={{height:180,width:200,objectFit:'cover',marginBottom:30}} />
          <div className='boxx'>
            <p>{Visible.name}</p>
            <p style={{ fontSize: 15 }}>
              <FaCheck size={15} color='black' />
              Added to Cart
            </p>
            <div className='btnss'>
              <button onClick={() => setVisible(null)}>
                Continue Shopping
              </button>
              <button >
                <Link to={{ pathname: '/Cart'}} style={{ textDecoration: 'none', color: 'black' }}>
                  Go To Cart
                </Link>
                {/* <Link to={{ pathname: '/receiver', state: { productData: products } }}>
        Send Data
      </Link> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null
}



    </>
  )
}

export default Catalog;








