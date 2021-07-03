import React from "react";
import { ClientArchive } from "./clientArchive";

export const ModalClient = ({user,specificStyle}) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=" "
        type="button"
        onClick={() => setShowModal(true)}
        style={specificStyle &&{width:"150px" , height:"200px",marginLeft:"20px" ,marginTop : "40px"}}
      >
         
          <div className=" w-20 h-20  mt-9 " style={specificStyle&&{width:"100%" ,height:"100%"}}>
              <a href="#">
              <img  src={`${user?.image?.filename?`https://banoun-app.herokuapp.com/api/upload/show/${user?.image?.filename}`:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}`} style={specificStyle&&{width:"100%" ,height:"100%"}} alt="client pic"/>
              <p className=" text-sm text-center mt-1" >{user?.username}</p>
              </a>
          </div>
          
     
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"          
>
            <div className="relative w-auto my-6 mx-auto max-w-3xl" style={{boxShadow:"0 8px 16px 0 rgba(0,0,0,0.4)"}} >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"  >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-red rounded-t" style={{borderBottom:"2px solid #FFB624" }}>
                  <h3 className=" text-xl">سجل العميل</h3>
                  <button
                    className="  border-0 text-black  float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="fas fa-times-circle text-black "></i>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto" style={{height:"60vh"}}>
                  <ClientArchive user={user}/>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
     
    </>
  );
}