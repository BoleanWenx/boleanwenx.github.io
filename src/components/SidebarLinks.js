import React, { useState } from "react";
import citiasia from "../citiasia.png";

const SidebarLinks = () => {
  const [activeNav, setActiveNav] = useState("about");

  return (
    <nav>
      <img src={citiasia} alt="logo citiasia" />
      <ul className="text-center space-y-2 pr-7">
        {links.map((link, index) => (
          <li
            className={`${
              activeNav === link
                ? "text-white font-bold"
                : "text-green-500 font-semibold"
            } uppercase text-xl cursor-pointer`}
            key={index}
          >
            <a
              className="no-underline text-white"
              onClick={() => setActiveNav(link)}
              href={"#" + link}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const links = [
  "about",
  "experience",
  "education",
  "skills",
  "interests",
  "awards",
];

export default SidebarLinks;
