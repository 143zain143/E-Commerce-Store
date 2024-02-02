import React, { useEffect, useState } from 'react';

const myStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: 50,
  border: '0.5px solid black',
  backgroundColor: '#FAEED1',
  gap: 30,
};

const btns = {
  display: 'flex',
  gap: 20,
};

const button = {
  height: 20,
  width: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Cart = () => {
  const [storedItems, setStoredItems] = useState([]);
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('selectTocart'));

    if (storedCartItems) {
      setStoredItems(storedCartItems);
    }
  }, []);

  const removeItemFromLocalStorage = (index) => {
    const updatedItems = storedItems.filter((_, i) => i !== index);
    localStorage.setItem('selectTocart', JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const total = storedItems.reduce((accumulator, item) => {
      const itemPrice = parseFloat(item.price);
      if (!isNaN(itemPrice)) {
        return accumulator + itemPrice;
      }
      return accumulator;
    }, 0);
    return total;
  };

  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:50}}>Cart Items</h2>
      {storedItems.length > 0 ? (
        <div>
          {storedItems.map((item, index) => (
            <div key={index} style={myStyle}>
              <img src={item.URL} alt={item.name}></img>
              <p><strong>{item.name}</strong></p>
              <p><strong>Price:</strong> ${parseFloat(item.price).toFixed(2)}</p>
              <div style={btns}>
                <button onClick={decreaseCount} style={button}>
                  <strong>-</strong>
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)} style={button}>
                  <strong>+</strong>
                </button>
                {storedItems.length > 1 || index === 0 ? (
                  <button onClick={() => removeItemFromLocalStorage(index)}>
                    Remove Item
                  </button>
                ) : null}
              </div>
            </div>
          ))}
          <p style={{ textAlign: 'center', fontSize: 20, marginTop: 50 }}>
            <strong>Total Price:</strong> ${calculateTotalPrice().toFixed(2)}
          </p>
        </div>
      ) : (
        <p style={{marginTop:50,paddingBottom:50, textAlign:'center',fontSize:20}}>No items are stored in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
