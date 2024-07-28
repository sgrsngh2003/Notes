import { atom } from "recoil";

const notes = localStorage.getItem('notes');

export const notesAtom = atom({
    key: 'Notes',
    default: notes? JSON.parse(notes) : [],
});
