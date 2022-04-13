import Square from "./Buttons/Square";
import { getCategories } from "./../APIs/getCategories";
import { useEffect, useState } from "react";

function Category() {
  const [data,setData] = useState([]);
  useEffect(
    () => {
      fetch(process.env.REACT_APP_BASEURL + "/api/Categories?populate=*", { 
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer ' + process.env.REACT_APP_TOCKEN, 
            
        }),         
    })
        .then((Response) => Response.json())
        .then((result) => {setData(result)})
        .catch((err) => console.log(err))
    },[]
  )
  return (
    <div className="flex justify-center w-full ">

      {data.data?.map((category, index) => {

        return (
          <Square
            key={category.id}
            text={category.attributes.CategoryText}
            image=  { category.attributes.Image.data ? process.env.REACT_APP_BASEURL + category.attributes.Image.data?.attributes.url : "./Images/shop-category-2.png"}
            bgColor={category.attributes.BgColor}
            borderColor={category.attributes.BorderColor}
          />
        );
      })}
    </div>
  );
}

export default Category;
