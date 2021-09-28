import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

const Header = () => {
    const data = useContext(NoteContext)
    return (
        <div>
            <h2>{data.age}</h2>
        </div>
    )
}

export default Header
