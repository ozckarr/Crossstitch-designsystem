import "./App.css";
import { Wrap } from "./stories/Wrap/Wrap";
import { Text } from "./stories/Text/Text";

function App() {
  return (
    <div className="App">
      <Wrap>
        <Text text="–Test-" />
      </Wrap>
    </div>
  );
}

export default App;
