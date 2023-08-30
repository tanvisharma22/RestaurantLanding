import React, { useState, useEffect } from "react";

const CountDown = () => {
  const oneHourInMilliseconds = 60 * 60 * 1000; // One hour in milliseconds
  const [timeRemaining, setTimeRemaining] = useState(oneHourInMilliseconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 1000) {
          // Reset the countdown to one hour
          return oneHourInMilliseconds;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [oneHourInMilliseconds]); // Add oneHourInMilliseconds to the dependency array
  
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <span className="font-bold text-5xl text-black-300" style={{ fontFamily: "Roboto sans-serif" }}>
      {formattedTime}
    </span>
  );
};

export default CountDown;


