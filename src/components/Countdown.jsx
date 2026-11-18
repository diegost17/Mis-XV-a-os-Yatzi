
import { useEffect, useState } from "react";

function Countdown() {

  // Fecha del evento
  const eventDate = new Date("2027-01-30T18:00:00-06:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const updateCountdown = () => {

      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });

    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);

  }, [eventDate]);

  return (

    <div className="countdown">
       <p className="countdown-title">
      SOLO FALTAN
      </p>

      <div className="countdown-container">

        <div className="countdown-item">
          <span>{timeLeft.days}</span>
          <p>DÍAS</p>
        </div>

        <div className="countdown-item">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <p>HRS</p>
        </div>

        <div className="countdown-item">
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <p>MIN</p>
        </div>

        <div className="countdown-item">
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <p>SEG</p>
        </div>

      </div>

    </div>

  );

}

export default Countdown;
