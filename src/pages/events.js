import React from "react";

import { EventConsult } from "../components/organism/eventconsult";
import { HeaderEvents } from "../components/organism/headerEvents";
import NextBroadcast from "../components/organism/nextbroadcast";
import { WeekBroadcast } from "../components/organism/weekbroadcast";

const Events = () => {
  return (
    <>
      <div className="bg-alabaster-500 ">
        <HeaderEvents />
        <WeekBroadcast />
        <EventConsult />
        <NextBroadcast />
      </div>
    </>
  );
};

export default Events;
