import Home from "pages/home";
import Login from "pages/login";
import SignUp from "pages/sign-up";
import AuthRoute from "layouts/authRoute";
import { INDEX_PATH, LOGIN_PATH, SIGN_IN_PATH } from "layouts/models";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: INDEX_PATH,
    element: (
      <AuthRoute>
        <Home />,
      </AuthRoute>
    ),
  },
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: SIGN_IN_PATH,
    element: <SignUp />,
  },
]);

function Router() {
  return <RouterProvider router={routes} />;
}

export default Router;
