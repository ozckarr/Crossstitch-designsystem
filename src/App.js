import "./App.css";
import { Wrap } from "./stories/Wrap/Wrap";
import { Border } from "./stories/Box/Border";

import { Text } from "./stories/Text/Text";

function App() {
  return (
    <div className="App">
      <Wrap>
        <Border>
          <Text text="–Test-" />
          <Text text="–Test-" />
          <Text text="–Test-" />
          <Text text="–Test-" />
          <Text text="–Test-" />
          <Text text="–Test-" />
          <Text text="–Test-" />
          <Text text="–Test-" />
        </Border>
      </Wrap>
    </div>
  );
}

export default App;
