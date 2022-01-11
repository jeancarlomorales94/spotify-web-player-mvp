import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './features/auth/Login';
import PrivateRoute from './utils/PrivateRoute';
import Layout from './components/Layout';
import Callback from './features/auth/Callback';
import Main from './components/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/:id" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
