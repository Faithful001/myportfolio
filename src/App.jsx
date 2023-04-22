import Aboutme from './Aboutme';
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className="content">
      <Home/>
      <Aboutme/>
      <Portfolio/>
      </div>
    </div>
  )
}

export default App;
