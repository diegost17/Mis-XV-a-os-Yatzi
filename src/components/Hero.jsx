import "../styles/invitation.css";
import Countdown from "../components/Countdown";

function Hero() {
  return (
    <div className="invitation-container">

      {/* PORTADA */}
      <section className="hero">

        <div className="hero-decoration"></div>

        <div className="hero-content">

          <p className="hero-subtitle">
            CON LA BENDICIÓN DE DIOS Y DE MIS PADRES
          </p>

          <div className="hero-divider">
            <span></span>
            <span className="divider-diamond">✧</span>
            <span></span>
          </div>

          <h1>Mis XV Años</h1>

          <h2>Yatziri</h2>

          <p className="hero-invitation">
            Me encantaría compartir contigo
            este día tan especial.
          </p>

          <div className="hero-divider">
            <span></span>
            <span className="divider-diamond">✧</span>
            <span></span>
          </div>

          <p className="scroll-text">
            DESLIZA PARA DESCUBRIR
          </p>

          <span className="scroll-arrow">↓</span>

        </div>

      </section>


      {/* CUENTA REGRESIVA */}
      <section className="countdown-section">

        <p className="section-subtitle">
          UN DÍA INOLVIDABLE SE ACERCA
        </p>

        <h2>Faltan</h2>

        <Countdown />

      </section>


      {/* CEREMONIA RELIGIOSA */}
      <section className="event-section">

        <span className="event-icon">✧</span>

        <p className="section-subtitle">
          ACOMPAÑAME A CELEBRAR
        </p>

        <h2>Ceremonia religiosa</h2>

        <p className="event-time">
          00:00 horas
        </p>

        <p className="event-place">
          Nombre de la iglesia
        </p>

        <p className="event-address">
          Dirección de la iglesia
        </p>

        <button className="location-button">
          VER UBICACIÓN
        </button>

      </section>


      {/* RECEPCIÓN */}
      <section className="event-section reception-section">

        <span className="event-icon">✧</span>

        <p className="section-subtitle">
          DESPUÉS DE LA CEREMONIA
        </p>

        <h2>Recepción</h2>

        <p className="event-time">
          00:00 horas
        </p>

        <p className="event-place">
          Nombre del salón
        </p>

        <p className="event-address">
          Dirección del salón
        </p>

        <button className="location-button">
          VER UBICACIÓN
        </button>

      </section>


      {/* CÓDIGO DE VESTIMENTA */}
      <section className="event-section">

        <span className="event-icon">✧</span>

        <p className="section-subtitle">
          CÓDIGO DE VESTIMENTA
        </p>

        <h2>Formal</h2>

        <p className="event-address">
          Celebremos esta ocasión con elegancia.
        </p>

      </section>

    </div>
  );
}

export default Hero;