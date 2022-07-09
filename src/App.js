import logo from './logo.svg';
import './App.css'
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="Aman"/>
      <HoverCounter name="Amit"/>
    </div>
  );
}

export default App;
