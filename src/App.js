
import './App.css';
import {LoginModalWindow} from "./components/LoginModalWindow";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {RegistrationModalWindow} from "./components/RegistrationModalWindow";
import {useState} from "react";
import {QuizMainPage} from "./components/QuizMainPage";


function App() {
    const [isLogedin, setIsLoggedin] = useState(false);
    return (
        <div className="App-header">
            <Router>
                <Routes>
                        <Route path="/" element={<LoginModalWindow />}/>
                        <Route path="/login" element={<LoginModalWindow />}/>
                        <Route path='/registration' element={<RegistrationModalWindow/>}/>
                        <Route path='/main' element={<QuizMainPage/>}/>
                </Routes>
            </Router>
        </div>
  );
}

export default App;
