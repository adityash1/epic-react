import { Logo } from "./components/logo";

function App() {
  return (
    <>
      <div className="App">
        <Logo width="80" height="80" />
        <h1>Bookshelf</h1>
      </div>
      <div>
        <button onClick={() => console.log("login clicked")}>Login</button>
        <button onClick={() => console.log("register clicked")}>
          Register
        </button>
      </div>
    </>
  );
}

export default App;
