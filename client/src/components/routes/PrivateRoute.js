import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import { setUser } from "../../redux/features/auth/authSlice";

import { useNavigate, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      dispatch(showLoading());
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/user/getUser`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (data.success) {
        dispatch(setUser(data.data));
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.log(error);
    }
  };
  useEffect(() => {
    if (!user) {
      getUser();
    }
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
