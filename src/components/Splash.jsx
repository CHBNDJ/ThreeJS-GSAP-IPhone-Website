import { animatedLogo } from "../utils/index";

function Splash() {
  return (
    <div className="loader">
      <img className="logo" src={animatedLogo} alt="apple loader" />
    </div>
  );
}

export default Splash;
