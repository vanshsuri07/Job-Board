import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { setUser } from "../../redux/features/auth/authSlice";
import axios from "axios";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      dispatch(showLoading());
      const { data } = await axios.post(
        "/api/v1/user/getUser",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      dispatch(setUser(data.data)); // assuming your backend returns user under `data.data`
    } catch (error) {
      dispatch(hideLoading());
      localStorage.clear();
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // No token = not logged in
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
