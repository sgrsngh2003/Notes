import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { notesAtom } from "../atom/notesAtom";

export default function ({id, title, content, timeStamps}){

    const [notes,setNotes] = useRecoilState(notesAtom);

    const [newTitle, setTitle] = useState(title)
    const [newContent, setContent] = useState(content)
    const [edit, setEdit] =  useState(false);

    function handleEdit(){
        setEdit(!edit)
    }

    function handleSubmit(){
        const index = notes.findIndex((item) => item.id === id);
        if (index !== -1) {
            const updatedNotes = [...notes];
            updatedNotes[index] = {
                ...updatedNotes[index],
                title: newTitle,
                content: newContent,
                timeStamp: timeStamp(),
            };
            setNotes(updatedNotes);
    }
    setEdit(false);
    alert('edited successfully')
    }

    function handleDelete() {
        const updatedNotes = notes.filter((item) => item.id !== id);
        setNotes(updatedNotes);
        alert('note deleted successfully')
    }

    return <div>
        <div className={`w-96 bg-yellow-100 rounded-lg px-6 py-4`}>
            <div className="flex justify-between mb-2">
                {!edit?
                (<div className="font-semibold text-lg">
                    {title}
                </div>):(
                    <input type="text" defaultValue={title}
                    className="w-full bg-yellow-100 outline-none font-semibold text-lg"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                )}
                {!edit?
                (<div className="flex gap-x-1">
                    <MdEdit 
                        onClick={handleEdit}
                        className="cursor-pointer"
                        />
                    <MdDelete 
                        onClick={handleDelete}
                        className="cursor-pointer"
                    />
                </div>):(
                    <FaCheck 
                        onClick={handleSubmit}
                        className="cursor-pointer"
                    />
                )
                }
            </div>
            {!edit?
            (<div className="mb-4">
                {content}
            </div>):(
                <input type="text" defaultValue={content}
                className="w-full bg-yellow-100 outline-none mb-4"
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            )}
            <div className="font-medium text-sm flex justify-between">
                <div>
                    {timeStamps[1]}
                </div>
                <div>
                    {timeStamps[0]}
                </div>
            </div>

           
           </div>
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