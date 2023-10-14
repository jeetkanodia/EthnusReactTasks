import "./App.css";
import ColorPicker from "./ColorPicker";

const App = () => {
  const colorArray = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
  ];
  return (
    <div>
      <ColorPicker colorArray={colorArray} />
    </div>
  );
};

export default App;
