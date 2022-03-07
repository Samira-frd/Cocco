import NavSquare from "./Buttons/NavSquare";
import { getNavCategories } from "./../APIs/getNavCategories";
import { useEffect, useState } from "react";

function NavCategory() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(
    () => {
      setCategoryData(getNavCategories());
    },[]
  )
   return (
    <div className="flex justify-center ">
      {categoryData.map((navCategory) => {
        return (
          <NavSquare
            key = {navCategory.CategoryText}
            text={navCategory.CategoryText}
            bgColor={navCategory.BgColor}
            image={navCategory.Image}
            borderColor={navCategory.BorderColor}
          />
          
        );
      })}
    </div>
  );
}

export default NavCategory;
