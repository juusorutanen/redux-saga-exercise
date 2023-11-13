
import '../App.css';
import { addToCart,emptyFromCart,removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Main() {

  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data)
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
      <button onClick={() => dispatch(productList())}>Call product list</button>
    </div>
  );
}

export default Main;