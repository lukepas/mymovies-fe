import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_PATHS } from './constants/routes';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import Register from './pages/Register/Register';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
                <Route path={ROUTE_PATHS.REGISTER} element={<Register />} />
                <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFound />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path={ROUTE_PATHS.DEFAULT} element={<Home />} />
                    <Route path={ROUTE_PATHS.MOVIE} element={<SingleMovie />} />
                </Route>
            </Routes>
        </div>
    );
}
