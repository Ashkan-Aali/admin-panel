import React from "react";

const SidebarItem = ({ Item, icon }) => {
  return (
    <a
      className={`py-1 text-start pe-4 sidebar_menu_item sidebar_items ${
        Item == "داشبورد" ? "active" : null
      }`}
    >
      <i className={`ms-3 icon ${icon} text-light`}></i>
      <span className="hiddenable no_wrap font_08">{Item}</span>
    </a>
  );
};

export default SidebarItem;
