import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function Aboute() {
    const data=useContext(NoteContext); 
    return (
        <div>
            <h1>This is About page</h1>
            <p>my nme is {data.name}</p>
        </div>
    )
}
