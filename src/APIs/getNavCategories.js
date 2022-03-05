export const getNavCategories =
() => {
    const result = [
        {
            ID: "wishlist",
            Image:'../Assets/Icons/shopping_bag_heart_icon.svg',
            CategoryText:'Wishlist',
            BgColor:'#FBFCF3',
            BorderColor:'#DCE086'
        },
        {
            ID: "myBag",
            Image:'../Assets/Icons/shopping_bag_heart_icon.svg',
            CategoryText:'My bag',
            BgColor:'#F5FBFB',
            BorderColor:'#9AD8D3'
        }
    ]
    return(result)
}