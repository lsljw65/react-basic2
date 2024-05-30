
import './App.css';
import Component1 from './Component1'; // 컴포넌트 호출
import Header from './component/Header'
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {/* 컴포넌트 표시 */}
      <Component1/>
      <Header/>
    </div>
  );
}

export default App;
