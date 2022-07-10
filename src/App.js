import './App.css';
import ClassMouse from './components/ClassMouse';
import HoockMouse from './components/HoockMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';


function App() {
  return (
    <div className="App">
      <IntervalClassCounter/>
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
