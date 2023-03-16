import { Route, Routes } from 'react-router-dom';
import './App.css';
import BestNews from './component/BestNews';
import Header from './component/Header';
import NewNews from './component/NewNews';
import TopNews from './component/TopNews';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<TopNews />} />
        <Route path='/new' element={<NewNews />} />
        <Route path='/best' element={<BestNews />} />
      </Routes>
    </div>
  );
}

export default App;
