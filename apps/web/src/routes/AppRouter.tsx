import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import BalancePage from '../pages/Balance';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/balance" element={<BalancePage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
