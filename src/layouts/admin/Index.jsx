import React from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
// import toggleSidebar from "../../assets/js/toggleSidebar";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from "../../pages/Content";
import { useIsLogin } from "../../hooks/authHook";
import { Navigate } from "react-router";
const Index = () => {
  const [loading, isLogin] =useIsLogin()
  return (
    <AdminContextContainer>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : isLogin ? (
        <div>
          <Content />
          <Navbar />
          <Sidebar />
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
};

export default Index;