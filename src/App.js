import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Body from "./UI/Body";
import Contact from "./components/Contact";
import Footer from "./UI/Footer";
import LukeKim from "./components/LukeKim";

function App() {
  return (
    <>
      <Navbar />
      <Body>
        <LukeKim />
        <AboutMe />
        <Experience />
        <Contact />
      </Body>
      <Footer />
    </>
  );
}

export default App;
