import './Menu.css';
import {  Link } from "react-router-dom";

function Menu() {
    return(
        <div>
            <ul className='menu'>
                <li><a href='/'><span className='itemOuter'><span className='item'>Home</span></span></a></li>
                <li><a href="products">Products</a> </li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>
    )
}


export default Menu;