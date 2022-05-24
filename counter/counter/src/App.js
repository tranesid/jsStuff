import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Counter Example</h1>
      <div className="counters">
        {/* first counter */}
        <div className="counter">
          <h1>Step Counter: 0</h1>
          <div className="counter-control">
            <button>add</button>
            <button>minus</button>
          </div>
        </div>
        {/* second counter */}
        <div className="counter">
          <h1>Screen Time Counter: 0</h1>
          <div className="counter-control">
            <button>add</button>
            <button>minus</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
