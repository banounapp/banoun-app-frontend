import React from 'react'
import { Button } from '../atoms/button';
import {Link} from 'react-router-dom';



export const LeftSideLogin = () => {
  
    return (
      <div className=" bg-silver-tree h-screen rounded-br-full right-div ">
        <div className="panel right-panel">
          <div className="content text-white relative top-20 right-15 text-center m-20">
            <h3 className="font-bold text-lg">ليس لديك حساب ؟</h3>
            <p className="pt-3">
              اذا كان  ليس لديك حساب تفضل بانشاء حساب وانضم الى عائله بنون
            </p>
            <Link to='/'>
              <Button stylee=" border-solid border-2  
            border-light-white-500 text-gray-50 "> انشاء حساب</Button>
            </Link>
            <img src="images/baby.png" className="image" alt="" />
          </div>
        </div>
      </div>
    )
}

