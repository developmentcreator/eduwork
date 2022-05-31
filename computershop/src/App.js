import {BrowserRouter as Router, Routes} from 'react-router-dom';
import TopBar from './components/TopBar';



function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
