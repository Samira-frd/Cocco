import './index.css';
import SearchBox from './SearchBox';
import Menu from './Menu';
import NavCategory from './../NavCategory';

function Navbar(){
    return(
        <div className="nav">
            <Menu></Menu>
            <SearchBox></SearchBox>
            <NavCategory></NavCategory>
        </div>
    )
}


export default Navbar;