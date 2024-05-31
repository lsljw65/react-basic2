
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header'
import Home from './component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Info from './component/pages/Info';
import State from './component/pages/State';
import Param1 from './component/pages/Param1';
import Param2 from './component/pages/Param2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/param/:id" element={<Param1/>}/>
          <Route path="/param" element={<Param2/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
