import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route exact path='/home'>
          <HomePage />
        </Route>
        <Route path='*'>
          <h2>Page does not exist</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
