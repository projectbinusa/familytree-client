import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // Use Switch in v5
import Loader from "./Loader"; // Adjust path as necessary
// Import your other components
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";

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
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
