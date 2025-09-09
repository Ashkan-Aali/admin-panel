import React, { useContext, useEffect } from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
// import toggleSidebar from "../../assets/js/toggleSidebar";
import AdminContextContainer, {
  AdminContext,
} from "../../context/adminLayoutContext";
import Dashboard from "../../pages/dashboard/Dashboard";
const Index = () => {
  const { showSidebar } = useContext(AdminContext);
  useEffect(() => {
    // toggleSidebar();
  }, []);
  return (
    <AdminContextContainer>
      <div>
        <Navbar />
        <Sidebar />
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
          <Dashboard />
        </section>
      </div>
    </AdminContextContainer>
  );
};

export default Index;
