import hotbg from "./Images/hot..jpeg.jpg";
import coldbg from "./Images/cold.jpeg.jpg";

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${coldbg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section_input">
            <input type="text" name="city" placeholder="Enter City"/>
            <button>°F</button>
          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h3>Delhi</h3>
              <img src="data:image/png;base64,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" alt="Weather Icon"/>
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>30°C</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
