import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import RouteGuard from "./components/route-guard";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardpage from "./pages/instructor/dashboard";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import NotFoundPage from "./pages/not-found";
import StudentHomePage from "./pages/student/home";

const App = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardpage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default App;
