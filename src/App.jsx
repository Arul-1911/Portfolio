import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <h1 className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
      </h1>
    </>
  );
}

export default App;
