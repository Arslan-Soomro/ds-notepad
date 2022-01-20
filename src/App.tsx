import { useContext } from "react";
import Navbar from "./components/Navbar";
import ReplaceModal from "./components/ReplaceModal";
import Textbox from "./components/Textbox";
import { StoreContext } from "./store/Store";

//TODO Find a solution to stop typescript from compiling deleted source files

//TODO Create a search function that highlights and searched words

//TODO Creata a replace function that replaces the found words with given word

//TODO create modals for other options

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
