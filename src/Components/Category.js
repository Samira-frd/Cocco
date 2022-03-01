import Square from './Buttons/Square';
import {getCategories} from './../APIs/Product';




function Category(){
    
    return(
        <div className="flex justify-center ">
           {
               getCategories().map(
                (category, index) => {
                     return (
                         <Square text={category.CategoryText} 
                            image={category.Image}
                            bgColor={category.BgColor}
                            borderColor={category.BorderColor}/>
                            )                     
                                     }
                                        )
           }
        </div>
    );
}

export default Category;