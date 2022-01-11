
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentAuthToken } from "../features/auth/authSlice";

const PrivateRoute = ({ children }) => {
    const token = useSelector(selectCurrentAuthToken);
    return token && token !== 'undefined' ? children : <Navigate to="/login" />;
}

export default PrivateRoute
