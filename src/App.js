import './App.css';
import Counter from './components/counter/Counter';


function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter by={2}></Counter>
      <Counter by={5}></Counter>
    </div>
  )
}

export default App;
