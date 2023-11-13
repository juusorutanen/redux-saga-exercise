
import '../App.css';
import { addToCart,emptyFromCart,removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';

function Main() {

  const dispatch = useDispatch();
  const product ={
    name:"iPhone",
    category:"mobilephone",
    price:1000,
    color:"black",
  }

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from cart</button>
      <button onClick={() => dispatch(emptyFromCart(product))}>Empty cart</button>
    </div>
  );
}

export default Main;