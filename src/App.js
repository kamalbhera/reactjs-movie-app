import logo from './logo.svg';
import './App.css';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './components/Main/Home';

function App() {
  return (
    <div className="bg-slate-100">
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
