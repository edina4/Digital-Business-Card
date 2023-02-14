import profile from "../src/images/profile.png"
import elogo from "../src/images/email-logo.png"
import tlogo from "../src/images/logo-twitter.png"
import flogo from "../src/images/logo-facebook.png"
import ilogo from "../src/images/insta-logo.png"
import llogo from "../src/images/linkedin-logo.png"
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <img src={profile} className="profile-pic" alt="" width="300px" />
        <p className="name">Edina Süller</p>
        <p className="job-title">Frontend Developer</p>
        <button className="mail">
          <img src={elogo} className="mail-logo" alt="" width="10px" />
          Email
        </button>
        <div className="about-text">
          <h1 className="txt-title">About</h1>
          <h2 className="txt">Hungarian living in the heart of Transylvania.</h2>
        </div>
        <div className="interests-text">
          <h1 className="txt-title">Interests</h1>
          <h2 className="txt">Understanding how things work has always fascinated me. 
            I love learning new languages.
            Walking in the woods, painting and pottery bring balance in my life. </h2>
        </div>
        <div className="logos">
          <img src={tlogo} className="mail-logo" alt="" width="30px" />
          <img src={flogo} className="mail-logo" alt="" width="30px" />
          <img src={ilogo} className="mail-logo" alt=""width="30px" />
          <img src={llogo} className="mail-logo" alt="" width="30px" />
        </div>
        
      </div>
    </body>
  );
}

export default App;
