import { useRecoilValue } from "recoil"
import ShowNote from "./ShowNote"
import { filterNotes } from "../selector/filterNotes"
import { useState, useEffect} from "react";
import Pagination from "./Pagination";

export default function(){

    const notes = useRecoilValue(filterNotes)
    
    const notesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    

    const lastNote = notesPerPage * currentPage;
    const firstNote = lastNote - notesPerPage;
    const currentNotes  = notes.slice(firstNote, lastNote) 

    return <div className="px-14 mb-8">
        
        <div className="flex flex-wrap justify-center gap-x-9 gap-y-10">
            {currentNotes.map((item) => {
                return <ShowNote key={item.id}
                id= {item.id}
                title={item.title}
                content={item.content}
                timeStamps={item.timeStamp}
                />
            })}
        </div>
        { notes &&
            <Pagination  notesPerPage={notesPerPage} 
            totalNotes={notes.length} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}/>
        }
    </div>
}

