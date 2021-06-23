import React, { useState } from 'react';

import FormEditDoctor from '../organism/formdoctor';
import PopupD from '../atoms/popD';

export const ModalEditDoc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <li className='text-spring-rain-500'>
          {' '}
          <a href='#'  onClick={togglePopup}>
            <i class='far fa-edit px-3 '></i>تعديل الصفحه الرئيسيه
          </a>
        </li>
        {isOpen && (
          <PopupD
            content={
              <>
                <FormEditDoctor />
              </>
            }
            handleClose={togglePopup}
          />
        )}

      </div>
    </>
  );
};















// import React from "react";
// import FormEditDoctor from '../organism/formdoctor';
// export const ModalEditDoc = () => {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <button
//         className=" "
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
         
//          <li className="text-spring-rain-500"> <a href="#"><i class="far fa-edit px-3 "></i>تعديل الصفحه الرئيسيه</a></li>

          
     
//       </button>
//       {showModal ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-92"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <FormEditDoctor />
//                 {/*body*/}
                
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }