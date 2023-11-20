import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Booking from './components/Booking';
import LoginPage from './components/LoginPage';
import ConfirmationPage from './components/ConfirmationPage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hotel_booking" element={<HomePage/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/confirmationpage" element={<ConfirmationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profilepage" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
