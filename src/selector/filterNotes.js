import { selector } from "recoil";
import { notesAtom } from "../atom/notesAtom";
import { showNotesAtom } from "../atom/showNotesAtom";


export const filterNotes = selector({
    key: "FilterNotes",
    get: ({get}) => {

        const list = get(notesAtom)
        const filter = get(showNotesAtom)
        const search = filter.search;
        const searchType = filter.searchOn;
        

        return list.filter((item) => {
            if(item[searchType].indexOf(search) !== -1){
                return item;
            }
        })
    }
})