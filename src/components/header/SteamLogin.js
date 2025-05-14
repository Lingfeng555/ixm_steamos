import React from 'react';
import styles from './SteamLogin.module.css';

const SteamLogin = () => {
  const handleSteamLogin = () => {
    // Here you would typically redirect to your backend which handles Steam OpenID authentication
    const steamOpenIDUrl = 'https://steamcommunity.com/openid/login';
    const returnUrl = `${window.location.origin}/auth/steam/return`; // Your backend endpoint
    
    const params = new URLSearchParams({
      'openid.ns': 'http://specs.openid.net/auth/2.0',
      'openid.mode': 'checkid_setup',
      'openid.return_to': returnUrl,
      'openid.realm': window.location.origin,
      'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
      'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
    });

    window.location.href = `${steamOpenIDUrl}?${params.toString()}`;
  };

  return (
    <div className={styles.steamLoginContainer}>
      <p className={styles.orDivider}>or</p>
      <button 
        className={styles.steamLoginButton}
        onClick={handleSteamLogin}
      >
        <img 
          src={"/steam-logo.png"}
          alt="Steam" 
          className={styles.steamIcon}
        />
        Sign in with Steam
      </button>
    </div>
  );
};

export default SteamLogin;