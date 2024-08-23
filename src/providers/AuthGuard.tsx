import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, ReactNode } from "react";

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {

    const isLoggedIn = localStorage.getItem("isLoggedIn")
    console.log(isLoggedIn);
    
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        if (isLoggedIn != "true") {
            navigate("/", { replace: true });
        }
    }, [isLoggedIn, navigate, location]);

    return <>{children}</>;
};

export default AuthGuard;