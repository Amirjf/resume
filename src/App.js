import './App.css';
import AvatarInfo from './components/AvatarInfo'
import PersonInfo from './components/PersonInfo'
import Devider from './components/Devider'
import Languages from './components/Languages'
import Coding from './components/Coding'
import Knowledge from './components/Knowledge'
import CounterSection from './components/CounterSection'
import Services from './components/Services';

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
              {/* <div className="back-shape">
                
              </div> */}

              <div className="hero-overlay">
                <div className="hero-title">
                 <div className="hero-title-h">
                 <h1 className="text-white">
                    <span>Hello there my Lovely Employer who wants to hire me</span>
                   </h1>
                   </div> 
                <div className="hero-code">
                  <h4>code das;lks;lad;kl</h4>
                </div>
                </div>
                <img className="my-pic" src="http://amir-jf.ir/wp-content/uploads/2021/10/face-2-min-1.png" />

              </div>
            </div>
            <div className="content">
                  <div className="container-fluid">
                    <div className="row">
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
