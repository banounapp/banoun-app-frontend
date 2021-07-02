
import React from "react";
import {CreateEvent, DatesEvents, LastEvent} from '../molecules'


export  const Tabs = ({ color ,setusersArr}) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap  mt-24 w-8/12 mr-16 md:mr-32 lg:mr-10">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-lg   px-5 py-3  block leading-normal " +
                  (openTab === 1
                    ?"text-spring-rain bg-" + color + "-300"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                احداثك السابقه
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-lg px-5 py-3  block leading-normal " +
                  (openTab === 2
                    ? "text-spring-rain bg-" + color + "-300"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 انشاء حدث
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-lg px-5 py-3  block leading-normal " +
                  (openTab === 3
                    ? "text-spring-rain bg-" + color + "-300"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 مواعيك
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 " style={{zIndex: 1}}>
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                 <LastEvent/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <CreateEvent/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <DatesEvents  setusersArr={setusersArr}/>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

// export default  function TabsRender() {
//   return (
//     <>
//       return <Tabs color="pink" />;
//     </>
//   );
// }
