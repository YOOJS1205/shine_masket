import React from 'react';
import './splash.css';
import FullLogo from '../../assets/images/full-logo.png';

export default function Splash() {
  return (
    <section className="splash-background">
      <img className="splash-logo" src={FullLogo} alt="스플래시 화면 로고" />
    </section>
  );
}
