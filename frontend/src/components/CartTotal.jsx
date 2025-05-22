import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    // Function to format amounts with 2 decimal places
    const formatCurrency = (amount) => {
        return amount.toFixed(2); // Limits to 2 decimal places
    };

    const subtotal = getCartAmount();
    const total = subtotal + delivery_fee;

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {formatCurrency(subtotal)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {formatCurrency(delivery_fee)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {formatCurrency(total)}</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
