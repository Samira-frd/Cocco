import './index.css';
import SearchBox from './SearchBox';
import Menu from './Menu';
import NavCategory from './../NavCategory';

function Navbar(){
    return(
        <div className="nav flex justify-between items-center shadow-md pl-10 pr-10">
            <Menu></Menu>
            <SearchBox></SearchBox>
            <NavCategory></NavCategory>
        </div>
    )
}


export default Navbar;