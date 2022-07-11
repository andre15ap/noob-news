import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export { MainRoutes };
