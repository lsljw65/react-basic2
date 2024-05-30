
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header'
import Home from './component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Info from './component/pages/Info';
import State from './component/pages/State';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/state" element={<State/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
