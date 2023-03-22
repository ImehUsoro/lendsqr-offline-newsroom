import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NewsContent from "./components/NewsContent";
import Home from "./pages/Home";
// import ProtectiveWrapper from "./components/ProtectiveWrapper";

import Login from "./pages/Login";

import Root from "./pages/Root";
import SignUp from "./pages/SignUp";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsContent />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
