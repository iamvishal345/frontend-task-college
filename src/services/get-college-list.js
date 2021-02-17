import Colleges from "../assets/colleges.json";
export const getCollegeList = (page) => {
  const index = page * 10;
  const { colleges } = Colleges;
  //Use Fetch or Axios
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(colleges.slice(index, index + 10));
    }, 1000);
  });
};
