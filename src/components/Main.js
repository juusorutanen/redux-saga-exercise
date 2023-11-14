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
      <div className="product-container">
        {data.map((item, index) => (
          <div key={index} className="product-item">
            <div className="product-image-container">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h1>{item.brand} {item.title}</h1>
            <div>{item.rating}</div>
            <p>{item.description}</p>
            <div>{item.price} €</div>
            <div className="product-buttons">
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
