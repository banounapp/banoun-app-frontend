import React  ,{useState}from 'react';
import  RightDocProfile  from '../components/organism/rightdocprofile';
import { Tabs } from '../components/organism/';

import NavBar from '../components/organism/NavBar';


const DocProfile = () => {

const [usersArr, setusersArr] = useState([]) ; 

  return (
    <div>
      {/* <NavBar className="bg-pale-leaf-300" /> */}
      <div className=" lg:flex ">
      <RightDocProfile  usersArr={usersArr}/>
      <Tabs setusersArr={setusersArr} />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default DocProfile;