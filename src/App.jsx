import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//layouts
import RootLayout, { rootLoader } from "./layouts/RootLayout";

//Routes

//pages
import Dashboard, {
  createAccountAction,
  dashboardLoader,
} from "./pages/Dashboard";
import Error from "./pages/Error";
import logoutAction from "./actions/logoutAction";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    // errorElement: <Error />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: createAccountAction,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
