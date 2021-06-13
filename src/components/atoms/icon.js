import React from 'react';
import { Link } from 'react-router-dom';


export const Icons = ({ icon, to, iconLink }) => {
  return (
    <>
      {icon ? <i className={`${icon} mt-1`} ></i> :
        <Link to={to}>
          <i className={`p-3 m-2 rounded-full border-solid border-2
              bg-white-600 hover:bg-silver-tree hover:text-white ${iconLink}`}>
          </i>
        </Link>}
    </>
  );
}

