import AppWrapper from '@src/components/wrapper';
import NewProductPage from '@src/pages/ProductsItemPage';
import HomePage from '@src/pages/ProductsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewProductPage/>} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
