import { useRoutes } from "react-router-dom";

import NotFound from "../views/pages/NotFound/NotFound";
import HomeIndex from "../views/pages/Home/HomeIndex";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <HomeIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;