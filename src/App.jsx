import { useLocation } from "react-router";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth/AuthLayout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      {location.pathname.includes("/auth") ? <AuthLayout /> : <AdminLayout />}
    </Provider>
  );
}

export default App;
