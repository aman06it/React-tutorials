import logo from './logo.svg';
import './App.css'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter render={(count, increment)=>(<ClickCounterTwo count={count} incrementCounter={increment} />)} />
      <Counter render={(count, increment)=>(<HoverCounterTwo count={count} incrementCounter={increment} />)} />

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=>isLoggedIn?"Aman":"Guest"}/> */}
    </div>
  );
}

export default App;
