import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Dashboard = () => {
  return (
    <>
      <h1>Dashboard Page</h1>
      <Outlet />
    </>
  )
}

const Project = () => <h1>Project Page</h1>;
const RecentActivity = () => {
  return <>
  <h1>RecentActivity Before</h1>;
   <Link to="project/2">Project</Link>
   <h1>RecentActivity After</h1>;
  </>
}

const AppNavigation = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/dashboard" activeClassName="active">
        Dashboard
      </NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to React 19 Demo APP</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React here
        </a>
      </header>
      <AppNavigation />
    </div>
  );
}

export default App;
