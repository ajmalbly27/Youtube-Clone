// Import core libraries and dependencies
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Import application components
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

// Define routes for the application using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // Parent component for main layout
    children: [
      {
        path: "/", // Home route
        element: <MainContainer />,
      },
      {
        path: "watch", // Watch route for video player page
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    // Provide Redux store to the application
    <Provider store={store}>
      <div className="">
        {/* Static header component displayed across all routes */}
        <Head />

        {/* RouterProvider to render the appropriate component based on the route */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
