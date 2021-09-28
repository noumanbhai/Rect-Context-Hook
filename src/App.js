import './App.css';
import Aboute from './components/Aboute';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <div className="App">
      <NoteState >
      <h1>Book</h1>
      <Aboute />
      </NoteState >
    </div>
  );

}

export default App;