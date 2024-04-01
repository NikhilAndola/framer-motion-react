import "./styles.css";
import * as React from 'react';
import {motion} from 'framer-motion';

export default function App() {
  const [ xValue, setXValue ] = React.useState(0);

  function handleClick() {
    setXValue(Math.random()*500 - 250);
  }

  return (
    <motion.div
      initial={{ rotate: -45, opaity: 0 }}
      animate={{ 
        rotate: 45, 
        opacity: 1,
        x: xValue
       }}
      transition = {{ 
        duration: 5, 
        delay: 1, 
        type: "spring",
        bounce: 0.5
      }}
      onClick={handleClick}
      className="square" />
  );
}
