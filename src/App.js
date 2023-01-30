import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Body from "./UI/Body";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Body>
        <AboutMe />
        <Experience />
        <Contact />
      </Body>
    </>
  );
}

export default App;
