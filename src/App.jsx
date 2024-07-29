import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Favorite from "./pages/Favorite";
import Logout from "./pages/Logout";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
import ResetPage from "./pages/ResetPage.jsx";
import { ApiProvider } from "./ApiContext";

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/Prague" />} />
            <Route path=":city" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="logout" element={<Logout />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="forgotpassword" element={<ForgetPassword />} />
            <Route path="resetpassword/:token" element={<ResetPassword />} />
            <Route path="resetpage" element={<ResetPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default App;
