import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slices/articeSlice.ts';
import { PopUp } from './PopUp';
// import { RootState } from '../redux/store.ts';
import type { AppDispatch } from '../redux/store.ts';

interface Product {
  id: string;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: string;
  date_end: string;
}

export default function Table() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(
    JSON.parse(localStorage.getItem('selectedProducts') || '[]')
  );
  const [isClicked, setisClicked] = useState<boolean>(false);
  const [rowToSelect, setRowToSelect] = useState<number>(
    JSON.parse(localStorage.getItem('selectCount') || '0')
  );
  const [rowClick, setRowClick] = useState<boolean>(true);
  const [page, setPage] = useState<number>(
    JSON.parse(localStorage.getItem('page') || '1')
  );

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, data } = useSelector(
    (state: RootState) => state.artic
  );

  const handleSubmit = (selectCount: number) => {
    localStorage.setItem('selectCount', JSON.stringify(selectCount));
    setisClicked(false);
    setRowToSelect(selectCount);
    if (data && Array.isArray(data)) {
      setSelectedProducts(data.slice(0, selectCount));
    }
  };

  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setProducts(data);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  }, [selectedProducts, rowToSelect]);

 const handleSelectionChange = (e: any) => {
  setSelectedProducts(e.value as Product[]);
};

  return (
    <div className="card">
      <DataTable
        value={products}
        tableStyle={{ minWidth: '50rem' }}
        selectionMode={rowClick ? undefined : 'multiple'}
        selection={selectedProducts}
        onSelectionChange={handleSelectionChange}
        dataKey="id"
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
        <Column
          field=""
          header={
            <PopUp
              setRowToSelect={setRowToSelect}
              isClicked={isClicked}
              setisClicked={setisClicked}
              onSubmit={handleSubmit}
            />
          }
        />
        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Place Of Origin" />
        <Column field="artist_display" header="Artist Display" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Date Start" />
        <Column field="date_end" header="Date End" />
      </DataTable>
    </div>
  );
}
