import React, { createContext, useState } from 'react'

export const CartContext=createContext();

const CartControl = ({children}) => {
    const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		// let isPresent = false;
		// cart.forEach((product)=>{
		// 	if (item.id === product.id)
		// 	isPresent = true;
		// })
		// if (isPresent){
		// 	setWarning(true);
		// 	setTimeout(()=>{
		// 		setWarning(false);
		// 	}, 2000);
		// 	return ;
		// }
		// setCart([...cart, item]);
        console.log(item);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

    const CartInfo={
       show,
       cart,
       warning,
       handleClick,
       handleChange,
    } 

  return (
    <CartContext.Provider value={CartInfo}>
        {children}
     </CartContext.Provider>
  )
}

export default CartControl
