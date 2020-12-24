import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router> 
      <Home/>
    </Router>
  );
}

export default App;
