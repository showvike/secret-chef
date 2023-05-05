import { useContext } from "react";
import { Navigate, useLocation, useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../providers/AuthProvider";

/* eslint-disable react/prop-types */
const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigation = useNavigation();

  if (loading) return <Spinner navigation={navigation} />;

  if (user) return children;

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default Private;
