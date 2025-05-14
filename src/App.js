import './App.css';
import Header from './components/header/Header';
import Features from './components/features/Features';
import Performance from './components/performance/Performance';
import Hardware from './components/hardware/Hardware';
import Support from './components/support/Support';
import ShowcaseCarousel from './components/showcase/ShowcaseCarousel';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="steam-header">
        <Header />
        <Features />
        <Performance />
        <ShowcaseCarousel />
        <Hardware />
        <Support />
        <a href="#download" className="cta-button">
          Download SteamOS
        </a>
      </header>
    </div>
  );
}

export default App;
