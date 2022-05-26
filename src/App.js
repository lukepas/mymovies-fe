import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import { ROUTE_PATHS } from './constants/routes';

function App() {
    // const isUserLoggedIn = false;

    return (
        <div className="app">
            <Routes>
                <Route path={ROUTE_PATHS.DEFAULT} element={<Home />} />
                <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
                <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
