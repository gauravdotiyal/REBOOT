import React, { useEffect, useState } from "react";

const mouseMove = () => {
  const [move, setMove] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    setMove({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.addEventListener("mousemove", handleMouse);
    };
  }, []);

  return move;
};

const MouseMove = () => {
  const movement = mouseMove();

  return (
    <div>
      Your mouse location is {movement.x} {movement.y}
    </div>
  );
};

export default MouseMove;
