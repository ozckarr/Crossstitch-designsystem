import "./App.css";
import { Wrap } from "./stories/Wrap/Wrap";
import { Border } from "./stories/Border/Border";

import { Text } from "./stories/Text/Text";

function App() {
  return (
    <div className="App">
      <Wrap>
        <Border>
          <Text text="-error 404-" />
          <Text text="-error 404-" />
          <Text text="-error 404-" />
          <Text text="-error 404-" />
          <Text text="-error 404-" />
          <Text text="-error 404-" />
          <Text text="-error 404-" />
          <Text text="-error 404-" />
        </Border>
      </Wrap>
    </div>
  );
}

export default App;
