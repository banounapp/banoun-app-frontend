export const checkTime = (time) => {
    let newTime = time.split("p")[1] ? parseInt(time.split("p")[0]) + 12 : parseInt(time.split("a")[0]);
    console.log(newTime, new Date().getHours());
    return newTime > new Date().getHours();
  };



  export const  locationsDescendingTimeOrder = (loc1, loc2)=> {
    return new Date(loc2.date).getTime() - new Date(loc1.date).getTime()
 }


export const getFormattedDate = (date) => {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
};