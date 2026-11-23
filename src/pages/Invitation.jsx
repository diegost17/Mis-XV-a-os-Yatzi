import { useState, useRef } from "react";
import Hero from "../components/Hero";
import "../styles/invitation.css";

function Invitation() {

  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = () => {
    setIsOpen(true);

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("No se pudo reproducir el audio:", error);
      });
    }
  };

  return (
    <main>

      {/* Música de fondo */}
      <audio
        ref={audioRef}
        src="/music/cancion.mp3"
        loop
      />

      {!isOpen ? (

        /* Pantalla inicial */
        <section className="welcome-screen">

          <div className="welcome-content">

            <h1>Mis XV Años</h1>

            <h2>YATZIRI</h2>

            <p>¡Tenemos una invitación especial para ti!</p>

            <button
              className="open-button"
              onClick={openInvitation}
            >
              ABRIR INVITACIÓN
            </button>

          </div>

        </section>

      ) : (

        /* Invitación */
        <Hero />

      )}

    </main>
  );
}

export default Invitation;