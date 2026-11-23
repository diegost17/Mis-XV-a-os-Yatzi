import "../styles/invitation.css";
import Countdown from "../components/Countdown";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-decoration">
        <span className="decoration-line"></span>
        <span className="decoration-circle"></span>
      </div>

      <div className="hero-content">

        <p className="hero-subtitle">
          CON LA BENDICIÓN DE DIOS Y DE MIS PADRES
        </p>

        <div className="hero-divider">
          <span></span>
          <span className="divider-diamond">✧</span>
          <span></span>
        </div>

        <h1>
          Mis XV Años
        </h1>

        <h2>
          Yatziri
        </h2>

        <p className="hero-invitation">
          Me encantaría compartir contigo
          este día tan especial.
        </p>

        <div className="hero-divider">
          <span></span>
          <span className="divider-diamond">✧</span>
          <span></span>
        </div>

        <Countdown />

      </div>

    </section>
  );
}

export default Hero;