import { RouteParams } from "Core/models/route";
import { RoutesConstant } from "RoutesConstant";

const lazy = false;

export const routes: RouteParams[] = [
    {
        path: RoutesConstant.LOGIN,
        component: require("Components/login/login.component").default,
        exact: true,
        lazy
    },
    {
        path: RoutesConstant.DASHBOARD,
        component: require("Components/dashboard/dashboard.component").default,
        exact: true,
        lazy
    }
];