import "./Pic.css";
const Picture = require("./picture.jpg");
const Pic = () => {
  return (
    <div className="Pic">
      <img className="Picture" src={Picture} />
    </div>
  );
};
export default Pic;
