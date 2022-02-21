import './Square.css'
import category1 from './../../Assets/Images/shop-category-1.png'

function Square(){
    return(
        <div className="w-40 h-40 bg-blue-300 btnCocco flex flex-col justify-center items-center">
            <img src={category1} alt="category" className='max-h-28'/>
            <h6>Babies</h6>
        </div>
    )
}


export default Square;