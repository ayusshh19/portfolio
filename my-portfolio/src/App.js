import './App.css';
import Navbar from './component/navbar/navbar';
import Intro from './Intro';
import Service from './service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
    </div>
  );
}

export default App;
