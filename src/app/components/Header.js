import React from 'react'
import navBar from "../mockData/navBar.json";
import Link from 'next/link';
import { YES } from '../util/Constant';

const Header = () => {

  return (
    <>
      {/* NAVBAR */}
      <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/"><strong>Mundana</strong></a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto d-flex align-items-center">
              {/* <li className="nav-item">
                <a className="nav-link" href="/">Intro <span className="sr-only">(current)</span></a>
              </li> */}

              {navBar.map((item, index) => {
                return <>
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" href={item.url}>{item.title}
                      {item.badge === YES ? <span className="badge badge-secondary">docs</span> : ""}
                    </Link>
                  </li>
                </>
              })}
            </ul>
            <ul className="navbar-nav ml-auto d-flex align-items-center">
              <li className="nav-item highlight">
                <a className="nav-link" href="https://www.wowthemes.net/mundana-free-html-bootstrap-template/">Get this Theme</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar  */}




    </>
  )
}

export default Header