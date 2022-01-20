import { useContext } from "react";
import Navbar from "./components/Navbar";
import ReplaceModal from "./components/ReplaceModal";
import Textbox from "./components/Textbox";
import { StoreContext } from "./store/Store";


function App() {

  const [state, dispatch] = useContext(StoreContext);

  return (
    <div className="App flex flex-col h-full w-full relative">
      {state.replace.isVisible ? <ReplaceModal /> : null}
      <Navbar />
      <Textbox />
    </div>
  )
}

export default App
