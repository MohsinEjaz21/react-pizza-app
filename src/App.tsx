
import { AppWrapper } from '@src/components/Wrapper';
import { ShellWrapper } from '@src/components/Wrapper/ShellWrapper';
import ProductItemPage from '@src/pages/ProductItemPage';
import ProductsPage from '@src/pages/ProductsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ShellWrapper>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/new" element={<ProductItemPage />} />
            <Route path="/products/:id" element={<ProductItemPage />} />
          </Routes>
        </AppWrapper>
      </ShellWrapper>
    </BrowserRouter>
  );
}

export default App;
