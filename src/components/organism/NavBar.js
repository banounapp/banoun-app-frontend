import React, { useEffect, useState } from "react";
import { DropDownList } from "../atoms";
import SearchInput from "../molecules/searchInput";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GetAllCategories } from ".././../redux/actions/categories";
import PropTypes from "prop-types";
import { logout } from "../../services/auth";
import { withRouter } from "react-router-dom";

const NavBar = ({
  GetAllCategories,
  categories,
  user,
  specialist_auth,
  history,
  dispatch,
}) => {
  const [toggleBurgerIcon, settoggleBurgerIcon] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    GetAllCategories()(dispatch);
  }, []);

  // console.table(user, sessionStorage, specialist_auth);

  const LogOut = async (e) => {
    e.preventDefault();
    await setIsProfileMenuOpen(!isProfileMenuOpen);
    logout(history, dispatch);
  };
  const getProfileImage = () => {
    if (user?.image?.filename)
      return `https://banoun-app.herokuapp.com/api/upload/show/${user.image.filename}`;
    else if (specialist_auth?.image?.filename)
      return `https://banoun-app.herokuapp.com/api/upload/show/${specialist_auth.image.filename}`;
    return "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  };

  return (
    <nav  >
      <div className="flex justify-center align-center nav" style={{paddingRight:"5%",paddingLeft:"0px"  , paddingTop:"0px",minWidth :"100%" }}>
        <div className="text-bl  flex items-center justify-start nav-items-container" style={{minWidth:"100%" , minHeight:"10vh"}}>
         
          <div className=" flex items-center justify-start sm:items-stretch sm:justify-start "  style={{width:"70%"}}>
            <div className="flex-shrink-0 flex items-center logoWrapper"  >
              <Link to="/" className="text-silver-tree text-4xl  py-2 rounded-md logo ">
                <img src="/images/logo.png" alt="logo" className="w-32 lg:w-44 " />
              </Link>
            </div>

            <div className="hidden my-auto sm:block sm:ml-6 nav-items" style={{minWidth:"65%",fontSize:"19px",marginLeft:"4%"}}>
              <div className="flex flex-between align-center space-x-4 nav-items-wrapper " style={{minWidth:"100%"}} >
                <Link to="/" className="main" aria-current="page" style={{minWidth:"15%",marginLeft:"3%" }}>
                  الصفحة الرئيسية
                </Link>

                {/* DROP DOWN */}

                <div style={{padding:"0px", minWidth:"9%" ,marginLeft:"4%"}}>
                  <DropDownList parent="المحتوي" category={categories} />
                </div>
                <a href="/#banoun" style={{minWidth:"9%", }}>
                  عن بنون
                </a>

                <a href="/#visitors" style={{minWidth:"9%",}}>
                  اراء الزوار
                </a>
                <a href="/#consult" style={{minWidth:"9%",}}>
                  استشير!
                </a>
                <a href="/community" className=" " aria-current="page" style={{minWidth:"9%",}}>
                  مقالات
                </a>
              </div>
            </div>
          </div>
          <div className=" flex items-start nav" >
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => settoggleBurgerIcon(!toggleBurgerIcon)}
              className="inline-flex items-center justify-center p-2 rounded-md sm:hidden text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {/* Icon when menu is closed.
  
              Heroicon name: outline/menu
  
              Menu open: "hidden", Menu closed: "block" */}

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/*      
              Icon when menu is open.
  
              Heroicon name: outline/x
  
              Menu open: "block", Menu closed: "hidden" */}

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* SEARCH  */}
          <div className="flex items-start justify-end my-auto profile"  style={{width: "30%",paddingLeft:"5%"}}>
            {user || specialist_auth
              ? localStorage.getItem("token") && (
                  <div className="flex-shrink-0 flex items-center ">
                  <span className="Name" >{user?.username || specialist_auth?.username}</span>

                    <div class="relative inline-block text-left">
                      <div>
                        <button
                          className="text-silver-tree text-4xl  px-3 py-2 rounded-md "
                          type="button"
                          style={{ outline: "none" }}
                          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                        >
                          <img
                            className="inline-block object-cover w-12 h-12 rounded-full"
                            src={getProfileImage()}
                            alt="Profile "
                          />
                        </button>
                      </div>
                      {isProfileMenuOpen ? (
                        <div
                          class="dropdown-menu origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"

                          role="menu"
                          style={{ zIndex: 1 ,border:"1px solid #77bfa3"}}
                        >
                          <div class="py-1" role="none" onMouseLeave={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
                            <Link
                              to={user ? "/profile" : specialist_auth && "/docprofile"}
                              className="text-gray-700 block px-4 py-2 text-sm "
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-0"
                              onClick={() =>
                                setIsProfileMenuOpen(!isProfileMenuOpen)
                              }
                            >
                              <div
                                class="relative inline-block flex items-center "
                                style={{ justifyContent: "start" }}
                              >
                                <div
                                  className="p-4 w-12 h-12 justify-self-center"
                                  style={{ width: "75%" }}
                                >
                                  {user?.username || specialist_auth?.username}
                                </div>
                                <div style={{ width: "25%" }}>
                                  <img
                                    className="inline-block object-cover w-12 h-12 rounded-full"
                                    src={getProfileImage()}
                                    alt="Profile "
                                  />
                                </div>
                              </div>
                            </Link>
                            <Link
                              to={user ? "/profile" : specialist_auth && "/docprofile"}
                              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 listItem"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-0"
                              onClick={() =>
                                setIsProfileMenuOpen(!isProfileMenuOpen)
                              }
                            >
                              اعدادات الحساب
                            </Link>

                            <button
                              type="submit"
                              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 listItem"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-3"
                              style={{ outline: "none" }}
                              onClick={LogOut}
                            >
                              تسجيل الخروج
                            </button>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                )
              : ""}{" "}
          </div>
          {toggleBurgerIcon ? (
        <div className="sm:hidden relative " id="mobile-menu"  style={{justifySelf:"end"}}>
          <div
            className="px-2 pt-2  w-full bg-white pb-3 space-y-1 absolute top-10 "
            style={{ zIndex: 1 ,width:"90vw"  , left:"6vw"}}
          >
            <Link
              to="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              الرئيسية
            </Link>

            <div style={{height:"100%"}}>
              <DropDownList parent="المحتوي" category={categories} />
            </div>

            <a
              href="#banoun"
              className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              عن بنون
            </a>

            <a
              href="#visitors"
              className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              اراء الزوار
            </a>
            <a
              href="#consult"
              className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              استشر!
            </a>
            <a href={user?"/profile":specialist_auth && "/docprofile"} className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              اعدادات الحساب
            </a>
            <hr></hr>
          </div>
        </div>
      ) : null}

          
        </div>
        {/* <div className="   lg:hidden md:hidden    flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <SearchInput placeholder="  البحث...      " />
        </div> */}
      </div>

     
    </nav>
  );
};
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  user: state.userProfile.user,
  specialist_auth: state.specialist.specialist_auth,
});

const mapDispatchToProps = (dispatch) => {
  return { dispatch, GetAllCategories };
};

NavBar.propTypes = {
  GetAllCategories: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
