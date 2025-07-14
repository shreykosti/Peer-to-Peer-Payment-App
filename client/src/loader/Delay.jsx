import React, { useState, useEffect } from "react";
//
const Delayed = ({ children, waitBeforeShow = 1000, fallback = null }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);

    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : fallback;
};

export default Delayed;
