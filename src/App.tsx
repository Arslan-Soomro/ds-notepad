import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

//TODO Find a solution to stop typescript from compiling deleted source files

//TODO Create a search function that highlights and searched words

//TODO Creata a replace function that replaces the found words with given word

//TODO create modals for other options

function App() {
  return (
    <div className="App flex flex-col h-full w-full">
      <Navbar />
      <Textbox />
    </div>
  )
}

export default App
