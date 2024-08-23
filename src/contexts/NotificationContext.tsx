import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext } from "react";
import { NotificationContextValue } from "../types";


export const NotificationContext = createContext<NotificationContextValue | null>(null);

const NotificationProvider = ({ children }:{children : React.ReactElement}) => {
    const showNotification = (msg: string, type: "success" | "error" | "info" | "warning") => {
        const toastOptions: ToastOptions = {
            position: type === "error" ? "bottom-right" : "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        };

        toast[type](msg, toastOptions);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
