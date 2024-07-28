import { atom } from "recoil";

export const showNotesAtom = atom({
    key: "ShowNotes",
    default: {
        search: "",
        searchOn: "title",
    }
});