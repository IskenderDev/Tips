import { BusinessPage } from "@/pages/BusinessPage";
import { Home } from "@/pages/Home";
import { PayPage } from "@/pages/Paypage";
import { Registration } from "@/pages/Registration";
import { RouteProps } from "react-router-dom";

enum AppRoutes {
  Home = "home",
  Registration = "registration",
  BusinessPage = "businessPage",
  PayPage = "payPage",
}
export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.Registration]: "/reg",
  [AppRoutes.BusinessPage]: "/business/:email",
  [AppRoutes.PayPage]: "/pay",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: routePaths.home,
    element: <Home />,
  },
  [AppRoutes.Registration]: {
    path: routePaths.registration,
    element: <Registration />,
  },
  [AppRoutes.BusinessPage]: {
    path: routePaths.businessPage,
    element: <BusinessPage />,
  },
  [AppRoutes.PayPage]: {
    path: routePaths.payPage,
    element: <PayPage/>,
  },
};
