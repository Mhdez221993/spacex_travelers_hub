
const urlDragons = 'https://api.spacexdata.com/v3/dragons';

const getDragons = () => axios.get(`${urlDragons}`).then((results) =>{
 const dragons = [];
 if (results.status === 200) {
  const { data } = results;
  data.forEach((item) => {
  }
