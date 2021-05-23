import React from 'react';


export  const Button = (props) => {
    return (
        <button className={`transparent rounded-full p-3 mt-4  focus:outline-none w-max
          ${props.stylee}` } type='submit' id="sign-in-btn " style={{width: '30%'}}>
            {props.children} 
        </button>
     );
}
 