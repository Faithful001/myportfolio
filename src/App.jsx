import Aboutme from './Aboutme';
import Contactme from './Contactme';
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Tools from './Tools';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className="content">
      <Home/>
      <Aboutme/>
      <Tools/>
      <Portfolio/>
      <Contactme/>
      </div>
    </div>
  )
}

export default App;
