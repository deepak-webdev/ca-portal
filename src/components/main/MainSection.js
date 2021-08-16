import React from "react";
import MeetingImage from "../../images/illustration1.png";
import SocialImage from "../../images/illustration2.png";
import "./MainSection.css";
export default function MainSection() {
  return (
    <>
      <div className="container">
        <img className="image" src={MeetingImage} alt="" />
        <div className="second">
          <h1>
            Join the <span className="dark">Family</span>
          </h1>
          <p className="student">
            STUDENT <span className="h-bold">AMBASSADOR</span>
          </p>
          <p>Lorem ipsum sit amet</p>
          <button className="btn">REGISTER</button>
        </div>
      </div>
      <h2 className="heading">
        <span className="dark">Role</span> of a Student Ambassador
      </h2>

      <div className="container2">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
          imperdiet nam diam hac vehicula massa fames diam tortor. Nam nunc
          fringilla viverra sit diam aliquam. Integer varius porttitor pretium
          a. Quis a cras at lorem libero dolor eu rhoncus. Purus sit arcu, in
          eget tortor ut tellus. Nam nunc fringilla viverra sit diam aliquam.
          Integer varius porttitor pretium a.
        </div>
        <div className="social">
          <img src={SocialImage} alt="" />
        </div>
      </div>
      <div className="container3">
        <h2>
          <span className="dark">Responsiblities</span> and specific duties
        </h2>
        <ul>
          <li>
            <i className="fas fa-hand-point-right"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </li>
          <li>
            <i className="fas fa-hand-point-right"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </li>
          <li>
            <i className="fas fa-hand-point-right"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </li>
          <li>
            <i className="fas fa-hand-point-right"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </li>
          <li>
            <i className="fas fa-hand-point-right"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </li>
          <li>
            <i className="fas fa-hand-point-right"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </li>
        </ul>
      </div>
    </>
  );
}
