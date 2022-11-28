import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AddQuestion from './pages/add-question';
import Home from './pages/home';
import TakeQuiz from './pages/take-quiz';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/add-question'
          element={<AddQuestion />}
        />
        <Route
          path='/take-quiz'
          element={<TakeQuiz />}
        />
      </Routes>
    </div>
  );
}

export default App;
