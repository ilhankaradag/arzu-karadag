import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/common/TopBar';
import MenuBar from './components/common/MenuBar';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Space from './components/common/Space';
import HomePage from './pages/HomePage';
import BiyografiPage from './pages/BiyografiPage';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <MenuBar />
      <Space />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biyografi" element={<BiyografiPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
