import './App.css';

import GoogleMapsTest from "./components/GoogleMapsTest"

function App() {
  return (
    <div className="App">
        <header className="App-header">
          Eco Hacks Project
        </header>
        <h1>ROUTE</h1>
        <form id="route-form">
          <label for="starting-point">Starting Point: </label>
          <input type="text" id="starting-point" required></input>
          <br></br>
          <label for="destination">Destination: </label>
          <input type="text" id="destination" required></input>
        </form>
        <GoogleMapsTest />
    </div>
  );
}

export default App;





