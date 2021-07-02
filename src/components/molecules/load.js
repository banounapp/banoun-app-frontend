import React from 'react';
const Load = (props) => {
  return (
    <>
      <div className='flex h-screen' style={{height:props.contain?"265px":"100vh"}} >
        <div className='m-auto' style={{height:props.contain?"100%":"100vh"}}>
          {/* <img src='/images/logo.png' className=' w-2/3 m-auto'  style ={{height:props.contain?"100%":"100vh"}} /> */}
          {/* <h1 className='text-silver-tree text-2xl text-center mt-12 md:text-3xl lg:text-3xl xl:text-2xl'>
            {' '}
            جاري التحميل ...
          </h1> */}
          <img
            src='/images/ball.gif '
            className='w-16 mt-20 m-auto mt-8 md:w-32 lg:w-16 xl:w-16 '
            style={{marginTop:props.contain?"10px":"20px"}}
          />
        </div>
      </div>
    </>
  );
};

export default Load;
