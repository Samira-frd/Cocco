
import './index.css';
import SearchBox from './SearchBox';
import Menu from './Menu';

function Navbar(){
    return(
        <div className="nav">
            <Menu></Menu>
            <SearchBox></SearchBox>
        </div>
    )
}


export default Navbar;