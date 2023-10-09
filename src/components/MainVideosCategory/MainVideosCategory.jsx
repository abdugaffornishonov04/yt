import { NavLink } from "react-router-dom";
import { MVCATEGORIESDATA } from "../../data/mainVidCategoriesData";

const MainVideosCategory = () => {
  return (
    <div className="mv-categories">
      <NavLink className="mv-categories-link mv-categories-link-active">
        All
      </NavLink>
      {MVCATEGORIESDATA.map((category) => {
        return (
          <NavLink className="mv-categories-link" key={category.id}>
            {category.category}
          </NavLink>
        );
      })}
    </div>
  );
}

export default MainVideosCategory

// ebfiuewfbkewjhfesiuhfewjkbfewiufew  

// apparently this one is also over 