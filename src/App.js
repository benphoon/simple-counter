import './App.css';
import { DisplayNumber } from './components/DisplayNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <body>
        <DisplayNumber />
      </body>
    </div>
  );
}

export default App;
