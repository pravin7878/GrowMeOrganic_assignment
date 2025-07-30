
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../redux/slices/articeSlice"
import { PopUp } from './PopUp';


interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function Table() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[] | null>((JSON.parse(localStorage.getItem("selectedProducts")) || null));
  const [isClicked, setisClicked] = useState(false)
  const [rowToSelect, setRowToSelect] = useState(JSON.parse(localStorage.getItem("selectCount")) || 0)
  const [rowClick, setRowClick] = useState<boolean>(true);
  const [page, setpage] = useState(JSON.parse(localStorage.getItem("page")) || 1)
  const { isLoading, isError, data } = useSelector(state => state.artic)
  const dispatch = useDispatch()
  // console.log(data)
//   console.log("selectedProducts", selectedProducts);
//   console.log(rowToSelect);

// console.log("page",page)


  const handleSubmit = (selectCount) => {
    localStorage.setItem("selectCount", selectCount)
    setisClicked(false)
    setSelectedProducts(data.slice(0, Number(selectCount)))
  }



  // title, place_of_origin, artist_display, inscriptions, date_start, date_end


  useEffect(() => {
    dispatch(fetchData(page))
    setProducts(data)
  }, [dispatch])

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setProducts(data);
    }
  }, [data]);


  useEffect(() => {
    if (rowToSelect > 0) {
         
    }

    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts))
  }, [selectedProducts, rowToSelect])



  return (
    <div className="card">
      <DataTable
        value={products}
        tableStyle={{ minWidth: '50rem' }}
        selectionMode={rowClick ? undefined : 'multiple'}
        selection={selectedProducts!}
        onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id"
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} ></Column>
        <Column
          field=""
          header={<PopUp setRowToSelect={setRowToSelect} isClicked={isClicked} setisClicked={setisClicked} onSubmit={handleSubmit} />}>

        </Column>

        <Column field="title" header="Title"></Column>
        <Column field="place_of_origin" header="Place Of Origin"></Column>
        <Column field="artist_display" header="Artist Display"></Column>
        <Column field="inscriptions" header="Inscriptions"></Column>
        <Column field="date_start" header="Date Start"></Column>
        <Column field="date_end" header="Date And"></Column>
      </DataTable>
    </div>
  );
}
