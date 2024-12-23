import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./Loader";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashbord from "./pages/Dashboard";
// import Profile from "./pages/Profile";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Home" component={Home} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Rg+123" component={Register} exact />
          <Route path="/Dashbord" component={Dashbord} exact />
          {/* <Route path="/Profile" component={Profile} exact /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
