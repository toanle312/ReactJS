import { useStoreContext } from "./store";

function App() {
  const [state, dispatch] = useStoreContext();

  return (
      <div style={{padding: "20px"}}>
        <h1>HELLO</h1>
      </div>
  )
}

export default App;
