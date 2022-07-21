import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = ({ path }) => {
  const [count, setCount] = useState(3);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && history.push(path);
    return () => clearInterval(interval); 
  }, [count, history, path]);
  
  return (
    <div className="container p-5 text-danger">
      <p>Redirecting you in {count} seconds...</p>
    </div>
  );
};

export default LoadingToRedirect;
