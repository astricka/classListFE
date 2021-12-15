import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthContextProvider } from './store/AuthContext';
import MyAccountPage from './pages/MyAccountPage';

function App() {
    return (
        <div className="App">
            <Toaster/>
            <AuthContextProvider>
                <Navbar/>
                <Switch>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/register">
                        <RegisterPage/>
                    </Route>
                    <Route path="/myAccount">
                        <MyAccountPage/>
                    </Route>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="*">
                        <h2>Page does not exist</h2>
                    </Route>
                </Switch>
            </AuthContextProvider>
            <Footer/>
        </div>
    );
}

export default App;
