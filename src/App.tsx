import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from "./redux/slices/articeSlice.js"
import { Button } from 'primereact/button';
import Table from './components/DataTable.js';
import Pagination from './components/Pagination.js';




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
