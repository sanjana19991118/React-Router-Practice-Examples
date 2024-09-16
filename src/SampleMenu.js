import React, { useState } from "react";
import { staticLeftSideBarData } from "./data";
import "./style.css";

const SampleMenu = () => {
  const [subMn, setSubMn] = useState([]);

  const toggleMenu = (index) => {
    if (subMn.includes(index)) {
      setSubMn(subMn.filter((s) => s !== index));
    } else {
      setSubMn([...subMn, index]);
    }
  };

  const sideBarMenu = (sideBarData, parentIndex = null) => {
    // console.log("sideBarData", sideBarData);
    return (
      <>
        <ul>
          {/* {console.log('s', staticLeftSideBarData)} */}
          {sideBarData?.map((side, i) => (
            <li key={i} className="menu-item">
              <div onClick={() => toggleMenu(i)}>
                {/* {console.log("check side menu", side.menu?.[0])}
                {console.log(typeof side.menu)} */}
                {side.title}
                {side.menu && (
                  <span className="submenu-toggle">
                    {subMn.includes(i) ? "" : ""}
                  </span>
                )}
              </div>
              {side.menu && subMn.includes(i) && sideBarMenu(side.menu, i)}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="side-menu">{sideBarMenu(staticLeftSideBarData)}</div>
    </>
  );
};

export default SampleMenu;
