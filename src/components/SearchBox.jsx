import { useState } from "react";
import { FaSearch, FaUbuntu } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { showNotesAtom } from "../atom/showNotesAtom";
export default function(){

    const [showNotes, setShowNotes] = useRecoilState(showNotesAtom);
    const [search, setSearch] =  useState('')
    const [searchOn, setSearchOn] = useState('title')

    function handleClick(){
        setShowNotes({
            search: search,
            searchOn: searchOn
        })
    }

    return <div className="my-4 lg:mx-24 md:mx-12 flex">
        <input type="text" placeholder="Search"
            className="w-full px-4 py-3 rounded-l-full bg-customBeige outline-none"
            onChange={(e) => {
                setSearch(e.target.value)
            }}
        />
        <select className="bg-customBeige outline-none text-customBlue" 
            defaultValue="title"
            onChange={(e) => {
                setSearchOn(e.target.value)
            }}
            >
            <option value="title">Title</option>
            <option value="content">Content</option>
        </select>
        <button className="px-4 bg-customBlue rounded-r-full"
            onClick={handleClick}
        >
            <FaSearch className="text-xl text-white font-bold pr-1"/>
        </button>
    </div>
}