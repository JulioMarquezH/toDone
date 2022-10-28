import useUser from "stores/useUser";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "layouts/models";
import { useEffect } from "react";

function AuthRoute({ children }) {
  const token = useUser((state) => state.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) return navigate(LOGIN_PATH);
  }, []);
  return children;
}

export default AuthRoute;
