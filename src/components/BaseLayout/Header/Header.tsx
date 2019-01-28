import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const logo = require('../../../assets/images/logo.png') as string;

class Header extends React.Component<any> {

  public render() {
    return (
      <section className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} />
          </Link>
        </div>
        <div className="navbar">
          <Link to={'/about'}>
            <p>The Applicant</p>
          </Link>
          <p>-</p>
          <Link to={'/how-i-work'}>
            <p>How I work</p>
          </Link>
          <p>-</p>
          <Link to={'/contact'}>
            <p>Contact Me</p>
          </Link>
        </div> 
      </section>
    )
  }
}

export default Header;