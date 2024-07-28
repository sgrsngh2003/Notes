
import AddNote from './components/AddNote'
import SearchBox from './components/SearchBox'
import ShowNotes from './components/ShowNotes'

function App() {
  

  return (
    <div className='mt-4 mx-4 md:mx-16 lg:mx-32'>
      <div className='flex justify-end'>
        <AddNote/>
      </div>
      <SearchBox/>
      <ShowNotes/>
    </div>
  )
}

export default App
