import "./Header.css";
import Pic from "./Pic/Pic";
import Name from "./Name/Name";
import Desc from "./Decs/Desc";
const Header = () => {
  return (
    <div className="Header">
      <Pic />
      <Name/>
      <Desc/>
    </div>
  );
};

export default Header;
