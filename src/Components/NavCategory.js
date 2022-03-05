import NavSquare from "./Buttons/NavSquare";
import { getNavCategories } from "./../APIs/getNavCategories";

function navCategory() {
  return (
    <div className="flex justify-center ">
      {getNavCategories().map((navCategory) => {
        return (
          <NavSquare
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

export default navCategory;
