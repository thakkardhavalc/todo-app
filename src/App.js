import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'
import { FifthComponent } from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import FourthComponent from './components/learning-examples/FourthComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
    </div>
  )
}

export default App;
