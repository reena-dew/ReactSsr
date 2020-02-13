import { RouteParams } from "Core/models/route";
import { RoutesConstant } from "RoutesConstant";

const lazy = true;

export const routes: RouteParams[] = [
    {
        path: RoutesConstant.LOGIN,
        component: () => import(/* webpackChunkName: "login" */ "Components/login/login.component"),
        exact: true,
        lazy
    },
    {
        path: RoutesConstant.DASHBOARD,
        exact: true,
        component: () => import(/* webpackChunkName: "dashboard" */ "Components/dashboard/dashboard.component"),
        lazy
    }
]