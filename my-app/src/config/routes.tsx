import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Login, Signup, Notfound } from "../containers/";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="*" Component={Notfound} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
