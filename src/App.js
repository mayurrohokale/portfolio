import "./App.css";
import Header from "./component/Header.js";
import Main from "./component/MainComponent.js";
import About from "./component/AboutUs.js";
import Resume from "./component/Resume.js";
import Services from "./component/Services.js";
import Projects from "./component/Projects.js";
import Contact from "./component/Contact.js";
import Footer from "./component/Footer.js";
export default function App() {
  return (
    <div className="max-w-screen overflow-hidden">
      <div className="flex flex-row">
        <div className="relative w-full h-screen ">
          <div className="flex flex-row">
            <div className="w-1/2 h-screen bg-blue-100"></div>
            <div className="w-1/2 h-screen bg-gray-100"></div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full ">
          <Header />
          <Main />
        </div>
      </div>
      <div>
        <About />
        <Resume />
        <Services />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}
