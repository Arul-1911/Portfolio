import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/projects/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <h1 className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </h1>
    </>
  );
}

export default App;
