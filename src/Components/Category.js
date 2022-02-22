import Square from './Buttons/Square';
import category1 from './../Assets/Images/shop-category-1.png'
import category2 from './../Assets/Images/shop-category-2.png'
import category3 from './../Assets/Images/shop-category-3.png'
import category4 from './../Assets/Images/shop-category-4.png'
import category5 from './../Assets/Images/shop-category-5.png'
import category6 from './../Assets/Images/shop-category-6.png'


function Category(){
    return(
        <div className="flex justify-center ">
        <Square text="Babies" image={category1} bgColor="#FBFCF3" borderColor="#DCE086"/>
        <Square text="Outfits" image={category2} bgColor="#FFF8FA" borderColor="#FEC1D2"/>
        <Square text="Kids" image={category3} bgColor="#F5FBFB" borderColor="#9AD8D3"/>
        <Square text="Nurturing" image={category4} bgColor="#FBFCF3" borderColor="#DCE086"/>
        <Square text="Girls" image={category5} bgColor="#FFF8FA" borderColor="#FEC1D2"/>
        <Square text="Child Care" image={category6} bgColor="#F5FBFB" borderColor="#9AD8D3"/>
        </div>
    );
}

export default Category;