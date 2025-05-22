import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [collections, setCollections] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = "http://localhost:3000"
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const email = localStorage.getItem('email');
    const navigate = useNavigate();

    const getCollectionsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/catalog`);
            if (response.data) {
                setCollections(response.data.collections);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUserCart = async () => {
        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`, { email }, {
                headers: {
                    token // optionally include token if you’re using auth
                }
            });
    
            if (response.data.success) {
                setCartItems(response.data.cartData || []);
            }
        } catch (error) {
            console.log("Error fetching user cart:", error);
        }
    };
    
    const syncCartToBackend = async (item, productData) => {
        console.log("sdasd", item)
        // Ensure product_id is included
        const payload = {
            cartItem: {
                uuid: item.uuid,
                name: item?.name,
                image: item?.image,
                price: item.price,
                size: "", // Make sure you have size in the item
                quantity: item.quantity,
                parentProductName: item.parentProductName
            }
        };
    
        console.log("Syncing to backend with payload:", payload); // Log the payload before sending
    
        try {
            const response = await axios.post(`${backendUrl}/api/cart/add_cart/${encodeURIComponent(email)}`, payload);
    
            console.log("Response from backend:", response.data); // Log backend response
    
            if (!response.data.success) {
                throw new Error(response.data.message || "Failed to sync cart");
            }
        } catch (error) {
            if (error.response) {
                console.error("Error syncing cart to backend:", error.response.data); // Log detailed response error
            } else if (error.request) {
                console.error("No response received from backend:", error.request);
            } else {
                console.error("Error in setting up the request:", error.message);
            }
        }
    };
    
    const updateCartOnBackend = async (uuid, quantity) => {
        console.log("Updating cart item to backend:", { uuid, quantity });
    
        const payload = { email, uuid, quantity };
    
        try {
            const response = await axios.post(`${backendUrl}/api/cart/update`, payload);
    
            console.log("Response from backend:", response.data);
    
            if (!response.data.success) {
                throw new Error(response.data.message || "Failed to update cart");
            }
        } catch (error) {
            if (error.response) {
                console.error("Error syncing cart to backend:", error.response.data);
            } else if (error.request) {
                console.error("No response received from backend:", error.request);
            } else {
                console.error("Error in setting up the request:", error.message);
            }
        }
    };
    

    const addToCart = (uuid, productData) => {
        let cartCopy = [...cartItems];
        const existingIndex = cartCopy.findIndex(item => item.uuid === uuid);
    
        if (existingIndex !== -1) {
            // Update the quantity locally if the item already exists
            cartCopy[existingIndex].quantity += 1;
    
            // Sync the updated quantity with the backend
            const syncedItem = cartCopy[existingIndex];
            if (isLoggedIn && email) {
                updateCartOnBackend(syncedItem.uuid, syncedItem.quantity);  // Update backend for existing item
            }
        } else {
            // If the item does not exist, add it to the cart
            cartCopy.push({
                uuid,
                _id: productData._id,
                name: productData.name,
                image: productData.image,
                price: productData.price,
                size: productData.size,
                quantity: 1,
                parentProductName: productData.parentProductName || ''
            });
    
            // Sync the new item with the backend
            const syncedItem = cartCopy.find(item => item.uuid === uuid);
            if (isLoggedIn && email) {
                syncCartToBackend(syncedItem); // Sync new item to backend
            }
        }
    
        // Update the local state with the modified cart
        setCartItems(cartCopy);
    };
    const updateQuantity = async (uuid, quantity) => {
        let cartCopy = [...cartItems];
        const itemIndex = cartCopy.findIndex(item => item.uuid === uuid);
    
        if (itemIndex !== -1) {
            const updatedItem = cartCopy[itemIndex];
    
            if (quantity <= 0) {
                cartCopy.splice(itemIndex, 1);
                setCartItems(cartCopy);
    
                // If logged in, remove from backend too
                if (isLoggedIn && email) {
                    try {
                        await axios.post(`${backendUrl}/api/cart/remove`, {
                            email,
                            uuid
                        });
                    } catch (error) {
                        console.error('Failed to delete from backend:', error);
                        toast.error('Could not remove item from backend');
                    }
                }
    
            } else {
                cartCopy[itemIndex].quantity = quantity;
                setCartItems(cartCopy);
    
                // Sync updated quantity to backend
                if (isLoggedIn && email) {
                    try {
                        await axios.post(`${backendUrl}/api/cart/update`, {
                            email,
                            uuid,
                            quantity
                        });
                    } catch (error) {
                        console.error('Failed to update cart item in backend:', error);
                        toast.error('Could not update quantity in backend');
                    }
                }
            }
        }
    };
    
    const getCartAmount = () => {
        return cartItems.reduce((sum, item) => {
            const quantity = Number(item.quantity);
            const price = Number(item.price);
            return sum + quantity * price;
        }, 0);
    };
    
    const getCartCount = () => {
        return cartItems.reduce((sum, item) => sum + Number(item.quantity), 0);
    };
    

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('email');
        setCartItems([]);
        setToken('');
    };
    const clearCartAfterOrder = async () => {
        try {
            const response = await axios.post(`${backendUrl}/api/cart/clear`, {
                email: localStorage.getItem('email'),
            });
    
            if (response.data.success) {
                setCartItems([]); // Clear local cart items
                // toast.success("Cart has been cleared after order.");
            } else {
                // toast.error("Failed to clear the cart.");
            }
        } catch (error) {
            console.error("Error clearing cart:", error);
            toast.error("Error clearing cart.");
        }
    };
    
    // Sync cart from localStorage or backend on load
    useEffect(() => {
        if (isLoggedIn && email) {
            getUserCart();
        } else {
            const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
            if (storedCartItems) setCartItems(storedCartItems);
        }

        getProductsData();
        getCollectionsData();
    }, []);

    // Save to localStorage for guest users only
    useEffect(() => {
        if (!isLoggedIn) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token, collections, logout, clearCartAfterOrder
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
