import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { AppProvider, useAppData } from "contexts";
import TechnologyLayout from "layouts/TechnologyLayout";
import CrewLayout from "layouts/CrewLayout";
import DestinationLayout from "layouts/DestinationLayout";
import GlobalStyle from "globalStyle";
import theme, { getFonts } from "theme";
import { Navbar, Loader } from "components";

// Views
const HomeView = lazy(() => import("views/Home"));
const TechnologyView = lazy(() => import("views/TechnologyView"));
const DestinationView = lazy(() => import("views/DestinationView"));
const CrewView = lazy(() => import("views/CrewView"));

function Routes() {
  const { destinations, crew, technologies } = useAppData();

  const elements = useRoutes([
    {
      path: "/home",
      element: (
        <Suspense fallback={<Loader />}>
          <HomeView />
        </Suspense>
      ),
    },
    {
      path: "destinations",
      element: <DestinationLayout />,
      children: [
        {
          path: ":slug",
          element: (
            <Suspense fallback={<Loader />}>
              <DestinationView />
            </Suspense>
          ),
        },
        {
          path: "",
          element: (
            <Navigate to={`/destinations/${destinations[0].slug}`} replace />
          ),
        },
      ],
    },
    {
      path: "crew",
      element: <CrewLayout />,
      children: [
        {
          path: ":slug",
          element: (
            <Suspense fallback={<Loader />}>
              <CrewView />
            </Suspense>
          ),
        },
        {
          path: "",
          element: <Navigate to={`/crew/${crew[0].slug}`} replace />,
        },
      ],
    },
    {
      path: "technologies",
      element: <TechnologyLayout />,
      children: [
        {
          path: ":slug",
          element: (
            <Suspense fallback={<Loader />}>
              <TechnologyView />
            </Suspense>
          ),
        },
        {
          path: "",
          element: (
            <Navigate to={`/technologies/${technologies[0].slug}`} replace />
          ),
        },
      ],
    },

    {
      path: "*",
      element: <Navigate to="/home" replace />,
    },
  ]);

  return elements;
}

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  }, []);

  console.log("test 1");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <AppProvider>
          <Navbar />
          <Routes />
        </AppProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
