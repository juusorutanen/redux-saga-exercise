import '../App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {BsCart2} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { emptyFromCart } from "../redux/action";



const Header = () => {
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.cartData)
    console.warn("data in header", result)
    return (
        <div className="header">
            <div className="cart">
            <button onClick={() => dispatch(emptyFromCart())}>Empty cart</button>
                <span>{result.length}</span>
                <BsCart2/>
            </div>
        </div>
    )
}

export default Header;