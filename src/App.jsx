import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//layouts
import RootLayout, { rootLoader } from "./layouts/RootLayout";

//Routes

//pages
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
