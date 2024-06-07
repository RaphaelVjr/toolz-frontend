import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import SignInSide from './pages/Signup';

function App() {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<SignInSide />} />
          </Routes>
    </Router>
  );
}

export default App;
