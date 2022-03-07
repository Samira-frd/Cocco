import Image1 from '../Assets/Icons/shopping_bag_heart_icon.svg';
import Image2 from '../Assets/Icons/wishlist_icon.svg';


export const getNavCategories =
() => {
    const result = [
        {
            ID: "wishlist",
            Image:Image1,
            CategoryText:'Wishlist',
            BgColor:'#FBFCF3',
            BorderColor:'#DCE086'
        },
        {
            ID: "myBag",
            Image:Image2,
            CategoryText:'My bag',
            BgColor:'#F5FBFB',
            BorderColor:'#9AD8D3'
        }
    ]
    return(result)
}