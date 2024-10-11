import React from 'react'
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>LetRookie</span>
            <div className="social">
                <a href="#" className="link"><img src="/facebook.png" alt="" /></a>
                <a href="#" className="link"><img src="/instagram.png" alt="" /></a>
                <a href="#" className="link"><img src="/facebook.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar