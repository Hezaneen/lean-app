import React, { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [noStyle, setNoStyle] = useState({});
  const [showCelebration, setShowCelebration] = useState(false);

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    setNoStyle({
      transform: `translate(${x}px, ${y}px)`,
      transition: "0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });
  };

  const handleYesClick = () => {
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    confetti({ particleCount: 100, angle: 60, spread: 80, origin: { x: 0 }, colors: ["#ff4d88", "#ff6fa5", "#ffffff"] });
    confetti({ particleCount: 100, angle: 120, spread: 80, origin: { x: 1 }, colors: ["#ff4d88", "#ff6fa5", "#ffffff"] });
    setShowCelebration(true);
  };

  const createHearts = () =>
    Array.from({ length: 25 }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 6 + Math.random() * 5;
      const size = 15 + Math.random() * 25;
      return (
        <div
          key={i}
          className="floating-heart"
          style={{ left: `${left}%`, animationDelay: `${delay}s`, animationDuration: `${duration}s`, fontSize: `${size}px` }}
        >
          ❤️
        </div>
      );
    });

  return (
    <div className="App">
      <div className="hearts-container">{createHearts()}</div>

      {!showCelebration ? (
        // Page 1
        <div className="card fade-scale">
          <img src="/question.gif" alt="Valentine" className="valentine-image" />
          <h1 className="main-title">
            Happy <span className="valentine-text">Valentine</span> my Lean!!!
          </h1>
          <p className="subtitle">Proceed?</p>

          <div className="buttons-container">
            <button className="yes-button" onClick={handleYesClick}>Yes!</button>
            <button className="no-button" style={noStyle} onMouseEnter={moveNoButton}>No</button>
          </div>
          <p className="hint">Sige, try mo humindi!!! 😠</p>
        </div>
      ) : (
        // Page 2
        <div className="card fade-scale">
          <img src="/celebration.gif" alt="Celebration" className="valentine-image" />
          <h1 className="main-title">Yaaay! 🎉</h1>
          <div className="celebration-text">
            <p>We're on our 1st Valentine na! 💖</p>
            <p>Hindi kita hinahack- I did this lang para medyo special yung first Valentine mo 😚 Hindi siya super ganda, kasi hindi naman ako marunong mag-code, I was just vibe coding! Mahal kita, bibi. Sobrang grateful ako na ikaw yung boyfriend ko. Lagi ko man ’tong nasasabi, pero yun lagi ko nafefeel, I’m really lucky to have you. Thank you for always making me feel pretty and confident, at sa paglalaan mo ng oras lagi sa’kin. I hope na lagi kitang makasama, lalo na sa mga days na you need someone. Sana napapafeel ko rin palagi sa’yo how much I love you, and I hope hindi magkulang yon.</p>
            <p><strong>Thank you for being the sweetest boyfriend ever Lean. 🌹</strong></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
