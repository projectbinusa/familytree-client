import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "./Loader";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./pages/Dashboard";
import TambahAnggota from "./pages/anggota/TambahAnggota";
import Anggota from "./pages/anggota/Anggota";
import PrivateRoute from "./routes/PrivateRoute";

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
          <Route path="/Register" component={Register} exact />
          <PrivateRoute path="/Dashboard" component={Dashboard} exact />
          <PrivateRoute path="/TambahAnggota" component={TambahAnggota} exact />
          <PrivateRoute path="/Anggota/:idJudul" component={Anggota} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
