import "./App.css";
import { Wrap } from "./stories/Wrap/Wrap";

import { Text } from "./stories/Text/Text";

import { Image } from "./stories/Image/Image";

import test from "./test.png";

function App() {
  return (
    <div className="App">
      <Wrap>
        <Text textColor="#ff0000" text="Text här" />
        <Image imageUrl={test} stitchWidth={40} />
      </Wrap>
    </div>
  );
}

export default App;
