import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import BalancePage from '../pages/Balance';
import { DashboardLayout } from '../components/Layouts/Dashboard';

const AppRouter = () => {
    return (
        <Router>
            <DashboardLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/balance" element={<BalancePage />} />
                </Routes>
            </DashboardLayout>
        </Router>
    );
};

export default AppRouter;
