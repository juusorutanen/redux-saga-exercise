import '../App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {BsCart2} from "react-icons/bs"


const Header = () => {

    const result = useSelector((state)=>state.cartData)
    console.warn("data in header", result)
    return (
        <div className="header">
            <div className="cart">
                <span>{result.length}</span>
                <BsCart2/>
            </div>
        </div>
    )
}

export default Header;