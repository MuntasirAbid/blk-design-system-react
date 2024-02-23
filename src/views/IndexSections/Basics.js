import logo1 from "../../assets/img/token3.png";
import logo2 from "../../assets/img/token1.jpeg";
import logo3 from "../../assets/img/token2.png";
import Marquee from "react-fast-marquee";

export default function Basics() {

  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="marquee-container">
        <Marquee pauseOnHover>
          <div className="marquee-item">
            <img src={logo1} alt="" className="path2" />
            <h1 className="name">token1</h1>
          </div>
          <div className="marquee-item">
            <img src={logo3} alt="" className="path2" />
            <h1 className="name">token3</h1>
          </div>
          <div className="marquee-item">
            <img src={logo2} alt="" className="path2" />
            <h1 className="name">token2</h1>
          </div>
          <div className="marquee-item">
            <img src={logo1} alt="" className="path2" />
            <h1 className="name">token1</h1>
          </div>
          <div className="marquee-item">
            <img src={logo1} alt="" className="path2" />
            <h1 className="name">token1</h1>
          </div>
          <div className="marquee-item">
            <img src={logo3} alt="" className="path2" />
            <h1 className="name">token1</h1>
          </div>

        </Marquee>
      </div>
    </div>
  );
}
