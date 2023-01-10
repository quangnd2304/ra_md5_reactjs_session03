import logo from './logo.svg';
import './App.css';
import ControlledComp from './components/ControlledComp';
import UnControlledComp from './components/UnControlledComp';

function App() {
  return (
    <div className="App">
      <ControlledComp />
      <UnControlledComp />
    </div>
  );
}

export default App;
