import { Provider } from "react-redux";
import Home from "./components/Home";
import appStore from "./utils/appStore";
import ShoppingCart from "./components/ShoppingCart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shoppingCart",
      element: <ShoppingCart />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Home></Home>
      </RouterProvider>
    </Provider>
  );
}

export default App;
