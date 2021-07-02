import React from "react";


export const ArchiveCardOnline = ({clientName, date, online ,time, mobile,img,url}) => {
    return (
        <div className=" flex justify-between w-96 h-36 rounded" style={{backgroundColor:"#E3F1E2" ,borderRadius:"8px"}}>
          <div className=" mr-10 mt-5">
              <img src={`${img?.filename?`https://banoun-app.herokuapp.com/api/upload/show/${img?.filename}`:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}`} alt="client pic" className=" block w-20 h-20"/>
              <p className=" mt-2"> {clientName}</p>
          </div>
          <div  className=" mt-7 ml-7 text-center">
              <p> {date}  / {time} </p>
              <p className=" text-silver-tree-900">{online} </p>
              <p>{ mobile}</p>

              <a href={url} className=" text-blue-800 text-small ">Zoom Link </a>
          </div>

       </div>
    );
};


