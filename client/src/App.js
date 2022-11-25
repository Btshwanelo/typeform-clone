import AddQuestion from './pages/add-question';
import FillForm from './pages/take-quiz';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/add'
          element={<AddQuestion />}
        />
        <Route
          path='/quiz'
          element={<FillForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
