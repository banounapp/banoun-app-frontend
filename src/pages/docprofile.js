import React from 'react';
import  RightDocProfile  from '../components/organism/rightdocprofile';
import { Tabs } from '../components/organism/';

import NavBar from '../components/organism/NavBar';


const DocProfile = () => {
  return (
    <div>
      {/* <NavBar className="bg-pale-leaf-300" /> */}
      <div className=" lg:flex ">
      <RightDocProfile />
      <Tabs />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default DocProfile;