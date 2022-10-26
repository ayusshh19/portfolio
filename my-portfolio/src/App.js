import './App.css';
import Committe from './committe';
import Footer from './component/footer/footer';
import Navbar from './component/navbar/navbar';
import Contactme from './Contactme';
import Intro from './Intro';
import Recentproject from './recentproject';
import Service from './service';
import ScrollReveal from 'scrollreveal';
function App() {
  ScrollReveal().reveal('#app');
  return (
    <div className="App" id='app'>
      <Navbar />
      <Intro />
      <Service />
      <Recentproject />
      <Committe />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
