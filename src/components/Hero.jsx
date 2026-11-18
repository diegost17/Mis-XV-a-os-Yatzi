import "../styles/invitation.css";

import Countdown from "../components/Countdown";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
    
        <h1>
          Mis XV Años
        </h1>

        <h2>
          YATZIRI
        </h2>

      </div>

    {/* Cuenta regresiva */}
      <Countdown />

    </section>
  );
}

export default Hero;