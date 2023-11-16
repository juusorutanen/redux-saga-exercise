import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const calculatedAmount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next);
    setAmount(calculatedAmount);

    const taxRate = 0.24;
    const calculatedTax = calculatedAmount * taxRate;
    setTax(calculatedTax);

    const calculatedTotal = calculatedAmount;
    setTotal(calculatedTotal);
  }, [cartData]);
  return (
    <div className="cart-page">
      <Link to="/">Go back to products</Link>
      <div className="cart-header">My Cart</div>
      <div className="cart-page-container">
        {cartData.length > 0 ? (
          <>
        <div className="cart-info-container">
            {cartData.map((item, index) => 
                <div className="cart-item" key={index}>
                    <img src={item.thumbnail} alt={item.title}/>
                    <div className="cart-details">
                        <h1>{item.brand} {item.title}</h1>
                        <p>{item.price} €</p>
                    </div>
                </div>
            )}
          </div>
        <div className="cart-price-container">
            <div className="cart-price"><span>Amount: </span><span>{amount} €</span></div>
            <div className="cart-price"><span>Discount: </span><span>0 €</span></div>
            <div className="cart-price"><span>Alv: </span><span>{tax} €</span></div>
            <div className="cart-price"><span>Total: </span><span>{total} €</span></div>
        </div>
      </>
        ) : (
        <p>Your cart is empty</p>
        )}
        </div>
    </div>
  );
};

export default Cart;
