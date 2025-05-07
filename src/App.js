import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddRecord from './pages/AddRecord';
import Trombinoscope from './pages/Trombinoscope';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecord />} />
        <Route path="/trombinoscope" element={<Trombinoscope />} />
      </Routes>
    </Router>
  );
}

export default App;