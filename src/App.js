import './App.css';
import Navbar from './Componenets/Navbar';
import { BrowserRouter,Route,Routes,link } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Landingscreen from './screens/Landingscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/home" exact Component={Homescreen}/>
      <Route path='/book/:roomid' exact Component={Bookingscreen}/>
      <Route path='/' exact Component={Landingscreen}/>
      <Route path='/login' exact Component={Loginscreen}/>
      <Route path='/register' exact Component={Registerscreen}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
