import '../App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {BsCart2} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { emptyFromCart } from "../redux/action";
import { Link } from 'react-router-dom';



const Header = () => {
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.cartData)
    console.warn("data in header", result)
    return (
        <div className="header">
            <Link to="/"><h1 className="header-logo">Tech Store</h1></Link>
            <Link to="/cart">
            <div className="cart">
            <button onClick={() => dispatch(emptyFromCart())}>Empty cart</button>
                <span>{result.length}</span>
                <BsCart2/>
            </div>
            </Link>
        </div>
    )
}

export default Header;