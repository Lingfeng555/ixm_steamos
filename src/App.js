import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Performance from './components/Performance';
import Hardware from './components/Hardware';

function App() {
  return (
    <div className="App">
      <header className="steam-header">
        <Header />
        <Features />
        <Performance />
        <Hardware />
        <a href="#download" className="cta-button">
          Download SteamOS
        </a>
      </header>
    </div>
  );
}

export default App;
