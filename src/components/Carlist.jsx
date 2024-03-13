import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import DeleteCarCellRender from "./DeleteCarCellRender";
import AddCar from "./AddCar";
import EditCarCellRender from "./EditCarCellRender";

export default function Carlist() {
    const [cars, setCars] = useState([]);
    const gridRef = useRef();
    const apiLink = 'https://carrestservice-carshop.rahtiapp.fi/cars'


    useEffect(() => fetchData(), []); //will be called after first render

    const fetchData = () => {
        fetch(apiLink)
            .then(response => response.json())
            .then(data => {
                setCars(data._embedded.cars);
                //console.log( cars[0]._links.self.href )
            })
            .catch(err => console.log.error(err))

    }

    const saveCar = (car) => {
        fetch(apiLink,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(car)
            })

            .then(res => fetchData())
            .catch(err => console.log.error(err))
    }


    const [columnDefs, setColumnDefs] = useState([
        { field: 'brand', filter: true },
        { field: 'model', filter: true },
        { field: 'color', filter: true },
        { field: 'fuel', filter: true },
        { field: 'modelYear', filter: true, headerName: 'Year' },
        { field: 'price', filter: true },
        //https://www.ag-grid.com/react-data-grid/component-cell-renderer/?ref=blog.ag-grid.com
        {
            headerName: '',
            minWidth: 100,
            editable: false,
            cellRenderer: EditCarCellRender,
            cellRendererParams: { fetchData }
        },
        {
            headerName: '',
            minWidth: 100,
            editable: false,
            cellRenderer: DeleteCarCellRender,
            cellRendererParams: { fetchData }
        },

    ]);


    //https://www.ag-grid.com/javascript-data-grid/column-sizing/#auto-size-columns-to-fit-grid
    const gridOptions = {
        autoSizeStrategy: {
            type: 'fitGridWidth',
            defaultMinWidth: 50,
        },
    }



    return (
        <>
            <AddCar saveCar={saveCar} />
            <div className="ag-theme-material" style={{ width: 1200, height: 500 }}>
                <AgGridReact
                    rowData={cars}
                    columnDefs={columnDefs}
                    gridOptions={gridOptions}
                    rowSelection="single"
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    frameworkComponents={{ deleteCarRenderer: DeleteCarCellRender, editCarRenderer: EditCarCellRender }}
                />

            </div>
        </>
    );
}