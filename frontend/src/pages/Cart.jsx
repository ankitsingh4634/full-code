import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { toast } from 'react-toastify'

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    console.log("Cart items from context: ", cartItems);  // Log cartItems
    if (cartItems.length > 0) {
      // If cartItems is not empty, map through and update cartData
      setCartData(cartItems.map(item => {
        // If products are available, enrich cart items with product data (like name, price, etc.)
        const product = products.find(p => p._id === item._id);
        return product ? { ...item, ...product } : item; // Merge cart item with product details
      }));
    }
  }, [cartItems, products]); // Add products to the dependency array to update whenever it's loaded

  console.log("Products in Cart:", products);
  console.log("Cart Data:", cartItems);  // Log cartData after it's set

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if user is logged in

  const handleCheckout = () => {
    const isCartEmpty = !cartItems || Object.keys(cartItems).length === 0;
  
    if (isLoggedIn) {
      if (isCartEmpty) {
        toast.warn("Your cart is empty.");
      } else {
        // If logged in and cart has items, proceed to checkout
        navigate('/place-order');
      }
    } else {
      // If not logged in, redirect to login page
      toast.warn("Please login to proceed to checkout");
      navigate('/login');
    }
  };
  

  return (
    <div className='border-t pt-14'>

      <div className=' text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
         cartItems.length > 0 ? cartData.map((item, index) => {
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={item.image} alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{item?.parentProductName} {item.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{item.price}</p>
                    {/* <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p> */}
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val)) updateQuantity(item.uuid, val);
                }}
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type="number"
                min={1}
                value={item.quantity}
              />
              <img onClick={() => updateQuantity(item.uuid, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          );
        }) : <p>Your cart is empty.</p>
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className=' w-full text-end'>
            <button onClick={handleCheckout} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart;
