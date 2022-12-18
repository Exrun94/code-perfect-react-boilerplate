import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
