import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./UserProfile";
import { PrimaryButton } from "./Kaibi";
import DemoLhl from "./DemoContext";
import DemoChild from "./DemoChild";
import Child from "./Child";
// Separate API logic
const submitUserProfile = async (data) => {
  await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserProfile onSubmit={submitUserProfile} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimaryButton />
        <DemoLhl />
      </header>
      <DemoChild emoChild>
        <Child />
      </DemoChild>
    </div>
  );
}

export default App;
