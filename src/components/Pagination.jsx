export default function({ notesPerPage, totalNotes, currentPage, setCurrentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center my-8">
            {pages.map((page, i) => {
                return (
                    <button 
                        key={i} 
                        onClick={() => setCurrentPage(page)} 
                        className={`px-4 py-2 mx-1 rounded-lg 
                            ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"} 
                            hover:bg-gray-300 transition-colors duration-200`}
                    >
                        {page}
                    </button>
                )
            })}
        </div>
    )
}
