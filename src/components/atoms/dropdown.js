import React from "react";
import { Link } from "react-router-dom";
import "../atoms/dropdown.css";

export const DropDownList = ({ parent, category }) => {
  console.log(category);


  const getCategoryImage = (name)=>{
      let imageUrl = "" ; 
      switch(name){
          case "حالات خاصة":
            imageUrl = "/images/حالات خاصة.png"
          break ;  
            case "الطفولة":
                imageUrl = "/images/الطفولة.png"
                break;
            case "المراهقة":
                imageUrl = "/images/adolescence.png"
                break;
            case "الحمل":
                imageUrl = "/images/الحمل.png"
            break;
            case "ما بعد الولادة":
                imageUrl = "/images/ما بعد الولادة.png"
                break;
            default :
            imageUrl = "/images/المراهقة.png"
            
        }
        console.log(imageUrl)
      return imageUrl

  }
  return (
    <div className="dropdown w-1/6  relative">
      <button className=" py-2 px-4  rounded inline-flex items-center">
        <span>{parent}</span>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      <ul
        className="dropdown-menu absolute hidden text-center top-10 bg-white origin-top-right   shadow-lg "
        style={{ zIndex: 2, width: "203px" ,height:"257px" , border:"1px solid #77BFA3"  , borderRadius:"12px" ,paddingTop:"14px" ,paddingBottom:"16.8px"}}
      >
        {/* <div className="dropdownMenu">

        </div> */}
          {category &&
            category.map((item) => (
        <li style={{width:"100%" ,height:"45.5px"}}  >
              <Link
                key={item._id}
                className="  w-4/4   py-2 px-4 block whitespace-no-wrap flex align-center justify-start listItem"
                style={{ paddingRight: "28px"  }}
                to={`/pregnacy/${item._id}`}
              >
                <img src={getCategoryImage(item.name)} style={item.name == "الحمل" ? {width: "16px", height: "25.5px", marginLeft: "23px",marginRight :"3px"}:{ width: "21px", height: "21px", marginLeft: "16.8px" }} alt={item.name} />{" "}
                <span
                
                  className="content"
                >
                  {item.name}
                </span>
              </Link>
        </li>
            ))}
      </ul>
    </div>
  );
};
