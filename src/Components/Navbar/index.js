
import './index.css';
import SearchBox from './SearchBox';
import Menu from './Menu';
import NavSquare from '../Buttons/NavSquare';

function Navbar(){
    return(
        <div className="nav">
            <Menu></Menu>
            <SearchBox></SearchBox>
            <NavSquare></NavSquare>
        </div>
    )
}


export default Navbar;