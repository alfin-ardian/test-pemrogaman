import { RootView } from "./RootView";
import { Review } from "../components/pages/review";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "/",
        element: <Review />,
      },
    ],
  },
]);

export default router;
