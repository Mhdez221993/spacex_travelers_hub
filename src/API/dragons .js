
const urlDragons = 'https://api.spacexdata.com/v3/dragons';

const getDragons = () => axios.get(`${urlDragons}`).then((results) =>{
 const dragons = [];
 if (results.status === 200) {
  const { data } = results;
  data.forEach((item) => {
   const dragon = {
    rocket_id: item.id,
    rocket_name: item.name,
    flickr_images: item.flickr_images,
    description: item.description,
    type: item.type,
   };
   dragons.push(dragon);
  });
 }
 return dragons;
});

export default { getDragons}
