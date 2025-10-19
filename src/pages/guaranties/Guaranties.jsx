import React from "react";
import AddGuaranty from "./AddGuaranty";
import GuarantyTable from "./GuarantyTable";

const Guaranties = () => {
  return (
    <div
      id="manage_guarantee_section"
      className="manage_guarantee_section main_section"
    >
      <h4 className="text-center my-3">مدیریت گارانتی ها</h4>
      <GuarantyTable />
    </div>
  );
};

export default Guaranties;
