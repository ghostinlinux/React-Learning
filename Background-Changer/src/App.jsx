import { useState } from "react"
import Buttons from "./components/buttons"
import Screen from "./components/screen"

function App() {
  const [backgroundColor, setBackgroundColor] = useState('yellow');
  const colorOptions = ['red', 'blue', 'green', 'pink', 'brown', 'black', 'purple', 'orange'];

  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <>
      <Screen color={backgroundColor} />
      <Buttons colors={colorOptions} onColorChange={handleColorChange} />
    </>
  );
}

export default App;
