import React from "react";
import { NavLink } from "react-router";

const SidebarItem = ({ Item, icon , targetPath }) => {
  return (
    <NavLink to={targetPath}
      className={`py-1 text-start pe-4 sidebar_menu_item sidebar_items `}
    >
      <i className={`ms-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{Item}</span>
    </NavLink>
  );
};

export default SidebarItem;
