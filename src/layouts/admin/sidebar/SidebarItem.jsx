import React from "react";
import { NavLink } from "react-router";
import { useHasPermission } from "../../../hooks/permissionsHook";

const SidebarItem = ({ title, icon , targetPath , pTitle }) => {
  const hasPerm = useHasPermission(pTitle);
  return hasPerm && (
    <NavLink to={targetPath}
      className={`py-1 text-start pe-4 sidebar_menu_item sidebar_items `}
    >
      <i className={`ms-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{title}</span>
    </NavLink>
  );
};

export default SidebarItem;
