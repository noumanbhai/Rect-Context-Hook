import './App.css';
import Aboute from './components/Aboute';
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <div className="App">
      <NoteState >
      <h1>Book</h1>
      <Aboute />
      <Footer/>
      <Header></Header>
      </NoteState >
    </div>
  );

}

export default App;