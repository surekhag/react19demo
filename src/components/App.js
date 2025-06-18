import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import styles from "./common.module.css";
import "../index.css";

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
    <h2>🏠 Welcome to the Home Page</h2>
  </motion.div>
);
const About = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.page}>
      <h2>About Page</h2>
      <p>This app is styled with love and CSS modules.</p>
      <Link to="/" className={styles.backLink}>
        ← Back to Home
      </Link>
    </div>
  </motion.div>
);
const Contact = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.page}>
      <h2>📬 Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out!</p>
      <Link to="/" className={styles.backLink}>
        ← Back to Home
      </Link>
    </div>
  </motion.div>
);
const Dashboard = () => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.page}>
      <h2>📊 Dashboard</h2>
      <p>Welcome to your dashboard. Choose a project to view details:</p>
      <ul>
        <li>
          <Link className={styles.backLink} to="project/john">
            View John's Project
          </Link>
        </li>
        <li>
          <Link className={styles.backLink} to="project/emma">
            View Emma's Project
          </Link>
        </li>
      </ul>
      <Outlet />
      <hr />
      <Link to="/" className={styles.backLink}>
        ← Back to Home
      </Link>
    </div>
  </motion.div>
);

const ProjectDetail = () => {
  const { username } = useParams();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.page}>
        <h3>🧑‍💻 {username}'s Project Details</h3>
        <p>
          This section contains detailed insights into {username}'s project.
        </p>
      </div>
    </motion.div>
  );
};

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to="/" className={styles.link}>
      Home
    </Link>
    <Link to="/about" className={styles.link}>
      About
    </Link>
    <Link to="/contact" className={styles.link}>
      Contact
    </Link>
    <Link to="/dashboard" className={styles.link}>
      Dashboard
    </Link>
  </nav>
);

const AppNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="project/:username" element={<ProjectDetail />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to React 19 Demo APP</p>
      </header>
      <AppNavigation />
    </div>
  );
}

export default App;
