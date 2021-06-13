import React from 'react'
import { Button } from '../atoms/button';
import {Link} from 'react-router-dom';


export const RightSideRegister = () => {
    return (
      <div className="bg-silver-tree h-screen rounded-bl-full right-div " >
        <div className="panel right-panel">
          <div className="content text-white relative top-20 right-15 text-center m-20">
            <h3 className="font-bold text-lg">هل لديك حساب ؟</h3>
            <p className="pt-3">
              اذا كان لديك حساب تفضل بالدخول الى عائله بنون
            </p>

            <Link to='/login'>
              <Button stylee=" border-solid border-2  
            border-light-white-500 text-gray-50 ">تسجيل الدخول</Button>
            </Link>

            <img src="" className="image" alt="" />
          </div>
        </div>
      </div>
    )
}
