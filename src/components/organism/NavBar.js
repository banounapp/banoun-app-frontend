import React, { useEffect, useState } from 'react';
import { DropDownList } from '../atoms';
import SearchInput from '../molecules/searchInput';
import './navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetAllCategories } from '.././../redux/actions/categories';
import PropTypes from 'prop-types';
import { logout } from '../../services/auth';
import { withRouter } from 'react-router-dom';

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

  console.log(categories, toggleBurgerIcon);
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
    return 'https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
  };

  return (
    <nav>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-4'>
        <div className='text-bl relative flex items-center justify-content-around h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <button
              type='button'
              onClick={() => settoggleBurgerIcon(!toggleBurgerIcon)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>

              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className=' flex items-center justify-center sm:items-stretch sm:justify-start'>
            {user || specialist_auth
              ? sessionStorage.getItem('token') && (
                  <div className='flex-shrink-0 flex items-center'>
                    <div class='relative inline-block text-left'>
                      <div>
                        <button
                          className='text-silver-tree text-4xl  px-3 py-2 rounded-md text-sm font-medium'
                          type='button'
                          onClick={() =>
                            setIsProfileMenuOpen(!isProfileMenuOpen)
                          }
                        >
                          <img
                            className='inline-block object-cover w-12 h-12 rounded-full'
                            src={getProfileImage()}
                            alt='Profile '
                          />
                        </button>
                      </div>
                      {isProfileMenuOpen ? (
                        <div
                          class='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                          role='menu'
                          style={{ zIndex: 1 }}
                        >
                          <div class='py-1' role='none'>
                            <Link
                              to={
                                user
                                  ? '/profile'
                                  : specialist_auth && '/docprofile'
                              }
                              className='text-gray-700 block px-4 py-2 text-sm'
                              role='menuitem'
                              tabindex='-1'
                              id='menu-item-0'
                              onClick={() =>
                                setIsProfileMenuOpen(!isProfileMenuOpen)
                              }
                            >
                              <div
                                class='relative inline-block flex items-center '
                                style={{ justifyContent: 'start' }}
                              >
                                <div
                                  className='p-4 w-12 h-12 justify-self-center'
                                  style={{ width: '75%' }}
                                >
                                  {user?.username || specialist_auth?.username}
                                </div>
                                <div style={{ width: '25%' }}>
                                  <img
                                    className='inline-block object-cover w-12 h-12 rounded-full'
                                    src={getProfileImage()}
                                    alt='Profile '
                                  />
                                </div>
                              </div>
                            </Link>
                            <Link
                              to={
                                user
                                  ? '/profile'
                                  : specialist_auth && '/docprofile'
                              }
                              className='text-gray-700 block px-4 py-2 text-sm'
                              role='menuitem'
                              tabindex='-1'
                              id='menu-item-0'
                              onClick={() =>
                                setIsProfileMenuOpen(!isProfileMenuOpen)
                              }
                            >
                              اعدادات الحساب
                            </Link>

                            <button
                              type='submit'
                              className='text-gray-700 block w-full text-left px-4 py-2 text-sm'
                              role='menuitem'
                              tabindex='-1'
                              id='menu-item-3'
                              onClick={LogOut}
                            >
                              تسجيل الخروج
                            </button>
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                )
              : ''}

            <div className='flex-shrink-0 flex items-center'>
              <Link
                to='/'
                className='text-silver-tree text-4xl  px-3 py-2 rounded-md text-sm font-medium'
              >
                <img src='images/logo.png' className="w-32"/>{' '}
              </Link>
            </div>

            <div className='hidden my-auto sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='/'
                  className=' px-3 py-2 my-auto rounded-md text-sm font-medium'
                  aria-current='page'
                >
                  الصفحة الرئيسية
                </Link>

                {/* DROP DOWN */}

                <div style={{ zIndex: 1 }}>
                  <DropDownList parent='المحتوي' category={categories} />
                </div>
                <a
                  href='#banoun'
                  className='  px-3 py-2 rounded-md text-sm font-medium'
                >
                  عن بنون
                </a>

                <a
                  href='#visitors'
                  className='  px-3 py-2 rounded-md text-sm font-medium'
                >
                  اراء الزوار
                </a>
                <a
                  href='#consult'
                  className='  px-3 py-2 rounded-md text-sm font-medium'
                >
                  أستشير!
                </a>
                <Link
                  to='/posts'
                  className=' px-3 py-2 my-auto rounded-md text-sm font-medium'
                  aria-current='page'
                >
                  مقا لا ت
                </Link>
              </div>
            </div>
          </div>
          <div className=' inset-y-0 lg:mr-40 sm:mr-20  hidden  lg:block md:block flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            {/* SEARCH  */}
            <SearchInput placeholder='  البحث...      ' />
          </div>
          {/*  */}
        </div>
        <div className='   lg:hidden md:hidden    flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
          {/* SEARCH  */}
          <SearchInput placeholder='  البحث...      ' />
        </div>
      </div>

      {/* TOGGLE MENU */}
      {toggleBurgerIcon ? (
        <div className='md:hidden relative' id='mobile-menu'>
          <div
            className='px-2 pt-2 absolute w-full bg-white pb-3 space-y-1'
            style={{ zIndex: 1 }}
          >
            <Link
              to='#'
              className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
              aria-current='page'
            >
              الرئيسية
            </Link>

            <div>
              <DropDownList parent='المحتوي' category={categories} />
            </div>

            <a
              href='#banoun'
              className=' hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              عن بنون
            </a>

            <a
              href='#visitors'
              className=' hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              اراء الزوار
            </a>
            <a
              href='#consult'
              className=' hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
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
