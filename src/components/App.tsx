import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
