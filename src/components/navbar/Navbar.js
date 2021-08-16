import React, { Component } from "react";
import Logo from "../../images/image.png";
import { MenuItem } from "./MenuItem";
import "./Navbar.css";
export default class Navbar extends Component {
  state = {
    clicked: false,
  };

  // function to tell its clicked or not
  handleMenuClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <nav className="navbar-items">
        <img className="logo" src={Logo} alt="" />
        <div className="menu-icon" onClick={this.handleMenuClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

// import Logo from "../../images/image.png";
// import "./Navbar.css";
// const Navbar = () => {
//   return (
//     <div className="header">
//       <div className="logo-nav">
//         <div className="logo-container">
//           <img className="logo" src={Logo} alt="" />
//         </div>
//       </div>
//       <ul className="links">
//         <li>
//           <a href="#">HOME</a>
//         </li>
//         <li>
//           <a href="#">QUESTIONSARRE</a>
//         </li>
//         <li>
//           <a href="#">PROFILE</a>
//         </li>
//         <li>
//           <a href="#">PROFILE</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
