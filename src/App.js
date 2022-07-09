import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello'


function App() {
  return (
    <div className="App">
      <Greet name='Aman'>
        <p>children props</p>
      </Greet>
      <Greet name='Amit'>
        <button>Action</button>
      </Greet>
      <Greet name='Atul'/>
      <Welcome name='Aman'/>
      <Welcome name='Amit'/>
      <Welcome name='Atul'/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;
