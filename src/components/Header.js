import React from 'react';

const Header = () => {
  return (
    <div>
      <img src="/steam-logo.png" alt="SteamOS Logo" className="steam-logo" />
      <h1 className="title">SteamOS</h1>
      <p className="subtitle">
        The definitive gaming operating system, designed to deliver the best experience on any hardware
      </p>
      <p className="tagline">
        Now you can enjoy your Steam library everywhere and with your family
      </p>
      <p className="tagline-sub">
        From your living room to your pocket device - Gaming without boundaries
      </p>
    </div>
  );
};

export default Header;