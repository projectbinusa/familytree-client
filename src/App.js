import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // Use Switch in v5
import Loader from "./component/Loader"; // Adjust path as necessary
// Import your other components
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
import Navbar from "./component/Navbar";

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
          {" "}
          {/* Use Switch instead of Routes in v5 */}
          {/* Define your routes */}
          {/* <Route path="/" component={Login} exact /> */}
          {/* <Route path="/register" component={Register} exact /> */}
          <Route path="/Navbar" component={Navbar} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
