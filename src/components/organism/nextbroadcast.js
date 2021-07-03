import { connect } from "react-redux";
import React, { useEffect } from "react";
import { CardBroadcast } from "../molecules";
import { GetEventsaccepted } from "../../redux/actions/event";
const NextBroadcast = ({ GetEventsaccepted, events }) => {
  useEffect(() => {
    GetEventsaccepted();
  }, []);
  return (
    <>
      <div className="flex  md:mt-5   lg:px-20">
        <div class="w-7  overflow-hidden inline-block">
          <div class=" h-7  bg-spring-rain-700 -rotate-45 transform origin-top-right">
            {" "}
          </div>
        </div>
        <p className=" text-lg lg:text-2xl py-1"> القادم </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-3 md:px-20 lg:px-20">
        {events?.map((item) => (
          <CardBroadcast
            title={item.Topic}
            desc={item.description}
            imageURL={`https://banoun-app.herokuapp.com/api/upload/show/${item.Specialist?.image?.filename}`}
            date={item.Date}
            link={item.zoom}
          />
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  events: state.event.Eventaccepted,
});

export default connect(mapStateToProps, { GetEventsaccepted })(NextBroadcast);
