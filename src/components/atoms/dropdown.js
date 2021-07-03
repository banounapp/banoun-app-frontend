
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../atoms/dropdown.css";

export const DropDownList = ({ parent, category }) => {
  console.log(category);

  const [isDropDownOpened, setisDropDownOpened] = useState(false);
  const getCategoryImage = (name) => {
    let imageUrl = "";
    switch (name) {
      case "حالات خاصة":
        imageUrl = "/images/حالات خاصة.png";
        break;
      case "الطفولة":
        imageUrl = "/images/الطفولة.png";
        break;
      case "المراهقة":
        imageUrl = "/images/adolescence.png";
        break;
      case "الحمل":
        imageUrl = "/images/الحمل.png";
        break;
      case "ما بعد الولادة":
        imageUrl = "/images/ما بعد الولادة.png";
        break;
      default:
        imageUrl = "/images/المراهقة.png";
    }
    console.log(imageUrl);
    return imageUrl;
  };
  return (
    <div className="dropdown w-1/6  relative">
      <button
        className="  rounded inline-flex items-center"
        style={{ outline: "none" }}
        onClick={() => setisDropDownOpened(!isDropDownOpened)}
      >
        <span>{parent}</span>
        {isDropDownOpened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 330 330"
            className="fill-current h-3 w-3"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 330 330"
            style={{ enableBackground: "new 0 0 330 330" }}
            className="fill-current h-3 w-3"
          >
            <path
              id="XMLID_224_"
              d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        )}
      </button>
      <ul
        className="dropdown-menu absolute hidden text-center top-7 bg-white origin-top-right   shadow-lg "
        style={{
          zIndex: 2,
          width: "203px",
          height: "257px",
          border: "1px solid #77BFA3",
          borderRadius: "12px",
          paddingTop: "14px",
          paddingBottom: "16.8px",
          display: isDropDownOpened ? "block" : "none",
        }}
      >
        {/* <div className="dropdownMenu">

        </div> */}
        {category &&
          category.map((item) => (
            <li style={{ width: "100%", height: "45.5px" }}>
              <Link
                key={item._id}
                className="  w-4/4   py-2 px-4 block whitespace-no-wrap flex align-center justify-start listItem"
                style={{ paddingRight: "28px" }}
                to={`/pregnacy/${item._id}`}
              >
                <img
                  src={getCategoryImage(item.name)}
                  style={
                    item.name == "الحمل"
                      ? { width: "16px", height: "25.5px", marginLeft: "23px", marginRight: "3px" }
                      : { width: "21px", height: "21px", marginLeft: "16.8px" }
                  }
                  alt={item.name}
                />{" "}
                <span className="content">{item.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
