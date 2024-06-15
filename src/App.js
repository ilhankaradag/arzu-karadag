import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/common/TopBar';
import MenuBar from './components/common/MenuBar';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Space from './components/common/Space';
import HomePage from './pages/HomePage';
import BiyografiPage from './pages/BiyografiPage';
import PoemIng from './components/poem/PoemIng';
import PoemGurcuce from './components/poem/PoemGurcuce';
import PoemZaza from './components/poem/PoemZaza';
import PoemKurtce from './components/poem/PoemKurtce';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <MenuBar />
      <Space />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biyografi" element={<BiyografiPage />} />
        <Route path="/ing-siirler" element={<PoemIng />} />
        <Route path="/gurcuce-siirler" element={<PoemGurcuce />} />
        <Route path="/zazaca-siirler" element={<PoemZaza />} />
        <Route path="/kurtce-siirler" element={<PoemKurtce />} />
        <Route path="/kitaplar" element={<BooksPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
