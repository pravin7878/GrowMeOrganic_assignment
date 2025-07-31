import './App.css'
import Table from './components/DataTable';
import Pagination from './components/Pagination';


function App() {
  return (
    <div className='p-5'>
      <h3 className='text-center font-bold pb-5 text-3xl'>Dynamic Table</h3>
      <div className='px-3 md:px-5 pb-5'>
        <Table />
      </div>
      <Pagination/>
    </div>
  )
}

export default App
