import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Signup from './components/Signup'
import Booking from './components/Booking/component';
import { Rules } from './components/Rules';
import './App.css';
import { MainPage } from './components/MainPage';

const App = () => {
  return (
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="rules" element={<Rules />} />
          <Route path="signup" element={<Signup />} />
          <Route path="booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
