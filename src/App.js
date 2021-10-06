import "./App.css";
import me from './assets/images/me.png'
import bg from './assets/images/bg.jpg'

import Typewriter from "typewriter-effect";
import AvatarInfo from "./components/AvatarInfo";
import PersonInfo from "./components/PersonInfo";
import Devider from "./components/Devider";
import Languages from "./components/Languages";
import Coding from "./components/Coding";
import Knowledge from "./components/Knowledge";
import CounterSection from "./components/CounterSection";
import Services from "./components/Services";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row p-0 no-gutters">
            <div className="col-md-3">
              <div className="side-info">
                <AvatarInfo />
                <div className="sidebar">
                  <PersonInfo />
                  <Devider />
                  <Languages />
                  <Devider />
                  <Coding />
                  <Devider />
                  <Knowledge />
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="top-bg-content">
                <div className="top-bg-overlay"></div>
              </div>
              <div className="hero mt-5">
                <div className="hero-overlay">
                  <div className="hero-title">
                    <div className="hero-title-h">
                      <h1 className="text-white">
                        <span>Hello there{<br />}I`m AmirMasoud</span>
                      </h1>
                    </div>
                    <div className="hero-code">
                      {"<"}
                      <i>code</i>
                      {"> i build "}
                      <span className="type-writer">
                        <Typewriter
                          options={{
                            strings: ["Web Applications","Wordpress Websites"],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                      {"<"}
                      <i>code</i>
                      {">"}
                    </div>
                  </div>
                  <img
                    className="my-pic"
                    src={me}
                  />
                </div>
              </div>
              <div className="content">
                <div className="container-fluid">
                  <div className="row pt-5">
                    <CounterSection />
                    <Services />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
