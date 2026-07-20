import React, { useEffect, useState } from "react";
import "./LiveClock.css";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="live-clock">
      <h3>{time.toLocaleTimeString()}</h3>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

export default LiveClock;