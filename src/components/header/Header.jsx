import "./header.css";
import "./ResponsiveHeader.css";

import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  
  return (
    <header>
      <div className="wraper">
        <div className="logo">
          <h1>ZBakery</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href='#menu'>Menu</a>
            </li>
          </ul>
          <div className="btn">
            <button type="text"><a href="#banner">ORDER</a></button>
          </div>
        </nav>
      </div>
    </header>
  );
};
