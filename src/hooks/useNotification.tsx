import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContext";
import { NotificationContextValue } from "../types";

const useNotification = (): NotificationContextValue => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("No notification context found");
    }
    return context;
}

export default useNotification;