import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ActivityList from './pages/ActivityList';
import ActivityDetail from './pages/ActivityDetail';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/activities" element={<ActivityList />} />
                <Route path="/activities/:id" element={<ActivityDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
