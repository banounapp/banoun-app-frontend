import React, { useEffect, useState } from "react";
import { DropDownList } from "../atoms";
import { SearchInput } from "../molecules";
import "./navbar.css";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { GetAllCategories } from '.././../redux/actions/categories';
import PropTypes from "prop-types";

const NavBar = ({ GetAllCategories, categories }) => {
    const [toggleBurgerIcon, settoggleBurgerIcon] = useState(false);
    useEffect(() => {

        GetAllCategories();

    }, []);
    console.log(categories);


    return (
        <nav>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-4">
                <div className="text-bl relative flex items-center justify-content-around h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => settoggleBurgerIcon(!toggleBurgerIcon)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                    <div className=" flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link
                                to="/"
                                className="text-silver-tree text-4xl  px-3 py-2 rounded-md text-sm font-medium"
                            >
                                بنون
                            </Link>
                        </div>
                        <div className="hidden my-auto sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link
                                    to="/"
                                    className=" px-3 py-2 my-auto rounded-md text-sm font-medium"
                                    aria-current="page"
                                >
                                    الصفحة الرئيسية
                                </Link>

                                {/* DROP DOWN */}

                                <div>
                                    <DropDownList
                                        parent="المحتوي"
                                        category={categories}

                                    />
                                </div>
                                <a
                                    href="#banoun"
                                    className="  px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    عن بنون
                                </a>

                                <a
                                    href="#visitors"
                                    className="  px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    اراء الزوار
                                </a>
                                <a
                                    href="#consult"
                                    className="  px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    أستشير!
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" inset-y-0 lg:mr-40 sm:mr-20  hidden  lg:block md:block flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* SEARCH  */}
                        <SearchInput placeholder="  البحث...      " />
                    </div>
                    {/*  */}
                </div>
                <div className="   lg:hidden md:hidden    flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* SEARCH  */}
                    <SearchInput placeholder="  البحث...      " />
                </div>
            </div>

            {/* TOGGLE MENU */}
            {toggleBurgerIcon ? (
                <div className="md:hidden relative" id="mobile-menu">
                    <div className="px-2 pt-2 absolute w-full bg-white pb-3 space-y-1">
                        <Link
                            to="#"
                            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            aria-current="page"
                        >
                            الرئيسية
                        </Link>

                        <div>
                            <DropDownList
                                parent="المحتوي"
                                category={categories}

                            />
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
                        <hr></hr>
                    </div>
                </div>
            ) : null}
        </nav>
    );
};
const mapStateToProps = (state) => ({
    categories: state.categories.categories

});

NavBar.propTypes = {

    GetAllCategories: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, {

    GetAllCategories

})(NavBar);
