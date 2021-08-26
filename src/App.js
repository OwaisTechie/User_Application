import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Navbar from "./component/Layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./component/pages/NotFound";
import AddUsers from "./component/user/AddUsers";
import EditUsers from "./component/user/EditUsers";
import Users from "./component/user/Users";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUsers} />
          <Route exact path="/users/edit/:id" component={EditUsers} />
          <Route exact path="/users/:id" component={Users} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
