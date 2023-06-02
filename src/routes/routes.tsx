import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Dashboard from "./Dashboard";
import Auth from "./Auth";
import Error from "./404";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Dashboard />} />
      <Route path="signin" element={<Auth signup={false} />} />
      <Route path="signup" element={<Auth signup={true} />} />
    </Route>
  )
);
