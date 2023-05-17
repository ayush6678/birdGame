import { useState, useEffect } from "react";
import "./style.css";

function Main() {

  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(100);
  const [pos, setPos] = useState(0);

  const handleClick = () => {
    setActive(current => !current)
  }


  useEffect(() => {
    setTimeout(() => {
      if (active)
        if (pos < 490)
          setPos(pos + 1);
    }, 5);


    setTimeout(() => {
      setHeight(() => {
        if (active)
          setHeight(Math.random() * 200 + 100)
      })
    }, 1000)
  });


  // if(pos<height){
  //   window.alert("Smacked!")
  // }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 38) {
        setPos((prev) => prev - 30);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  console.log();


  return (
    <div style={{ backgroundColor: "aqua" }}>
      <h1>Flappy-Bird</h1>

      <div className="area">
        <div className="bird" id='sparrow' style={{ marginTop: pos + "px" }}>
          <img alt="sky" src="https://www.seekpng.com/png/detail/352-3520343_flappy-bird-tap-flying-bird-rainbow-troops-drawing.png" width={'50px'} />
        </div>

        <div className="obst" style={{ animation: active ? "flow 3s infinite" : "", marginTop: height + 'px' }}>
          {/* <div className="pass" style={{ height: height + "px" }}>
          </div> */}

        </div>
      </div>

      <button onClick={handleClick}>Start/Stop</button>
      <div>Long press the UP arrow key to move.</div>
    </div>
  )
}

export default Main;