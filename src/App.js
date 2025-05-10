import './App.css';
import Header from './components/header/Header';
import Features from './components/features/Features';
import Performance from './components/performance/Performance';
import Hardware from './components/hardware/Hardware';
import Support from './components/support/Support';
import RayTracingComparison from './components/raytracing/RayTracingComparison';
import DistroIntegration from './components/distro/DistroIntegration';
import GamingMode from './components/gaming/GamingMode';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="steam-header">
        <Header />
        <Features />
        <Performance />
        <GamingMode />
        <RayTracingComparison />
        <DistroIntegration />
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
