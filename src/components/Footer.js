import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function Footer() {
       const data=useContext(NoteContext);
    return (
      <div>
        <p>This is Footer</p>
        <p>Name is:{data.state.name}</p>
        <p>Age is:{data.state.age}</p>
      </div>
    );
}

