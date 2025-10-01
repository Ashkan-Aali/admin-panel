import React from "react";
import { useLocation } from "react-router";
import PreButton from "../../components/PreButton";

const CategoryChildren = () => {
  const location = useLocation();
  return (
    <div className="py-3 d-flex justify-content-between">
      <h5 className="text-center">
        <span>زیرگروه :</span>
        <span className="text-info">{location.state.parentData.title}</span>
      </h5>
      <PreButton />
    </div>
  );
};

export default CategoryChildren;
