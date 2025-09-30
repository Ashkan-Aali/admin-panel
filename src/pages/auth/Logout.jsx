import React, { useEffect, useState } from "react";
import { Alert } from "../../utils/alerts";
import { Navigate } from "react-router";
import { logoutService } from "../../services/auth";

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    try {
      const res = await logoutService();
      if (res.status == 200) {
        Alert("خروج موفق", "با موفقیت از حساب کاربری خارج شدید", "success");
        localStorage.removeItem("loginToken");
      } else {
        Alert("متاسفم...!", res.data.message, "error");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Logout error:", error);

      if (error.response && error.response.status === 401) {
        Alert("خروج", "از حساب کاربری خارج شدید", "info");
      } else {
        Alert("توجه", "از حساب کاربری خارج شدید", "info");
      }
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
};

export default Logout;
