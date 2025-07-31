import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/slices/articeSlice.ts";
import type { PaginatorPageChangeEvent } from 'primereact/paginator';

export default function Pagination() {
    const dispatch = useDispatch();
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const onPageChange = (e: PaginatorPageChangeEvent) => {
        localStorage.setItem("page", JSON.stringify(e.page + 1));
        dispatch(fetchData(e.page + 1));
        setFirst(e.first);
        setRows(e.rows);
    };

    return (
        <div className="card">
            <Paginator
                first={first}
                rows={rows}
                totalRecords={120}
                rowsPerPageOptions={[10, 20, 30]}
                onPageChange={onPageChange}
            />
        </div>
    );
}