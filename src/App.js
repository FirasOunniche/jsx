import './App.css';
import MyImage from './img2.png';

function App() {
  return (
    <div>
      return (
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">Firas Ouinnich</h1>
          <br />
          <img src={MyImage}  className="logo" alt="logo"/>
          <br />
          <img src="img.jpg" width="100" alt="logo" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
      ); 
      </div>
  );
  }
export default App;
