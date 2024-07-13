import React, { useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import routesList from "./routes";
import AboutPage from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import ContactUs from "./Components/ContactUs";
import RestaurantDetails from "./Components/RestaurantMenu";
import { ThemeContext, UserContext } from "./utils/contexts";

const AppLayout = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ name: "Ashwini" });
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeContext.Provider value="light">
          <Header />
          <Outlet />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
