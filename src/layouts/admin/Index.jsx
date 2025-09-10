import React, { useEffect } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
// import toggleSidebar from "../../assets/js/toggleSidebar";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from "../../pages/Content";

const Index = () => {
  
  useEffect(() => {
    // toggleSidebar();
  }, []);
  return (
    <AdminContextContainer>
      <div>
        <Content />
        <Navbar />
        <Sidebar />
      </div>
    </AdminContextContainer>
  );
};

export default Index;
