import React, { useState } from 'react';
import { useEffect } from 'react';
import "./cart.css";
import { useCart } from '../contects/CartContext';

const Cart = () => {
    const [price, setPrice] = useState(100);
    const [books, setBooks] = useState([]);
    const {decreaseCount } = useCart();
  

    let cost=100;
    let amount=1;

    useEffect(() => {
        fetch("http://localhost:5000/all-cartbooks").then(res => res.json()).then(data => setBooks(data));
    }, [])

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    const handlePrice = () => {
        let ans = 0;
        books.map((item) => (
            ans += amount * cost
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
        }).then(res => res.json()).then(data => {
            setBooks(prevCartItems => prevCartItems.filter(item => item._id !== id));
             alert("Book is deleted successfully!") 
             decreaseCount();
            });
    }

    useEffect(() => {
        handlePrice();
    })

    // Add + or - 
    const handleChange = (id, d) => {
       if(d==+1) {
         amount+=d;
       }else {
        amount+=d;
       }
    };

    return (
        <article>
            {
                books?.map((item) => (
                    <div className="mt-28" key={item._id}>
                        <div className="cart_box" >
                            <div className="cart_img">
                                <img src={item.imageURL} />
                                <p>{item.bookTitle}</p>
                            </div>
                            <div>
                                <button onClick={() => handleChange(item._id, +1)}> + </button>
                                <button>{amount}</button>
                                <button onClick={() => handleChange(item._id, -1)}> - </button>
                            </div>
                            <div>
                                <span>{1}</span>
                                <button onClick={() => handleRemove(item._id)} >Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            <div className='total mt-20'>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
            <div className='mt-20  flex justify-center'>
                <button className='w-1/2 order-btn'>Place Order</button>
            </div>
        </article>
    )
}

export default Cart