import react from "react";
import { useContext } from "react";
import NoteContext  from "./NoteContext";



const NoteState=(props)=>{
    const state={
        "name":"Nouman",
        "Age":"25"
    }
    return (
        <NoteContext.Provider value={state}>
             {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState;


