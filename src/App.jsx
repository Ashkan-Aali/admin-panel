import { useLocation } from "react-router";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth/AuthLayout";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/auth") ? <AuthLayout /> : <AdminLayout />}
    </>
  );
}

export default App;
