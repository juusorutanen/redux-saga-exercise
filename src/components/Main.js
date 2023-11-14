import "../App.css";
import { addToCart, emptyFromCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(emptyFromCart())}>Empty cart</button>
      <div className="product-container">
        {data.map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.images[0]} alt={item.title} />
            <h1>Title: {item.title}</h1>
            <p>Title: {item.description}</p>
            <div>Title: {item.rating}</div>
            <div>Title: {item.price}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
