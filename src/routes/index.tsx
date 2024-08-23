import { useRoutes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import MianRoutes from "./MainRoutes";


export default function Routes() {
    return useRoutes([AuthRoutes, MianRoutes])
}