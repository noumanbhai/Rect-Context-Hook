import React,{useContext,useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function Aboute() {
    const data=useContext(NoteContext); 
    useEffect(() => {
        data.update()
        
    }, [])
    return (
      <div>
        <h1>This is About page</h1>
        <p>my nme is {data.sone.name}</p>
      </div>
    );
}
