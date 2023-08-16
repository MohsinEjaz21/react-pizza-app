import AppWrapper from '@src/components/wrapper';
import HomePage from '@src/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
