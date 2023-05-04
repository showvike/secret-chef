/* eslint-disable react/prop-types */
const Chef = ({ chef }) => {
  console.log(chef);
  const { chef_picture } = chef;

  return (
    <div>
      <img src={chef_picture} alt="chef" />
    </div>
  );
};

export default Chef;
