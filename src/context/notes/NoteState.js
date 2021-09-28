import react ,{useState} from "react";
// import { useContext } from "react";
import NoteContext  from "./NoteContext";



const NoteState=(props)=>{
    const sone={
        "name":"Nouman",
        "age":"25"
    }
    const [state, setstate] = useState(sone);
   const update=()=>{
        setTimeout(()=>{
       setstate({
          "name":"Kamran",
        "age":"30"
       })
    
            // setstate(old => ({...old, ...[{"name": "ali", "age": "5"}, sone]}))
        },2000)
    }
    return (
      <NoteContext.Provider value={{ state, update, sone }}>
        {props.children}
      </NoteContext.Provider>
    );

}


export default NoteState;


