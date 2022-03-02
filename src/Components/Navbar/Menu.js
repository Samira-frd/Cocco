import './Menu.css';
import {  Link } from "react-router-dom";

function Menu() {
    return(
        <div>
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="products">Products</Link> </li>
                <li>Categories</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
    )
}


export default Menu;