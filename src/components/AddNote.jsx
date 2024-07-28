import { useState, useEffect } from "react";
import { GoPlusCircle } from "react-icons/go";
import { useRecoilState,} from "recoil";
import { notesAtom } from "../atom/notesAtom";
import { v4 as uuidv4 } from 'uuid';


export default function(){
    
    const [notes, setNotes] = useRecoilState(notesAtom)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const [state, setState] = useState(false);
    function handleClick(){
        setState(!state)
    }

    function handleSubmit() {
        const newNote = {
            id: uuidv4(),
            title: title,
            content: content,
            timeStamp: timeStamp(),
        };
    
        setNotes([...notes, newNote]);
        handleClick();
        alert('Note added successfully')
      }
    
      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);

    return <div >
        <button onClick={handleClick} className="flex gap-x-1 items-center text-blue-400">
            <GoPlusCircle />
            Add new Note
        </button>
        {state && 
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="w-96 bg-white p-6 flex flex-col gap-y-3 rounded-lg ">
                    <div>
                        <input type="text" placeholder="Title" 
                            className="w-full bg-customBeige px-3 py-2 outline-none rounded-lg"
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <input type="text" placeholder="Your Notes here." 
                            className="w-full bg-customBeige px-3 py-2 outline-none rounded-lg "
                            onChange={(e) => {
                                setContent(e.target.value)
                            }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button onClick={handleClick} 
                            className="rounded bg-customBlue text-white px-2 py-1 font-bold"
                        >
                            Cancel
                        </button>
                        <button onClick={handleSubmit}
                            className="rounded bg-customBlue text-white px-2 py-1 font-bold"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        }
    </div>
}



function timeStamp(){
    const date = new Date();
    const dateString = date.toString();
    const dateList = dateString.split(" ");
    const dateSlice = dateList.slice(0,4);
    const time = dateList[4]
    const stamp = dateSlice.join(" ");
    const result = [stamp, time]
    return result
}