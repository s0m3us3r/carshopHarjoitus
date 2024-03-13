import React, {useState} from 'react';
import { Button } from '@mui/material';
import EditCar from './EditCar';

export default function EditCarCellRender(props) {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    const { fetchData } = props;
    const [editing, setEditing] = useState(false);
  

    const handleEditClick = () => {
        //console.log(props.data)
        setEditing(true);
    };


    return (
        <span>
            <span>{cellValue}</span>&nbsp;
            <Button variant="text" onClick={handleEditClick}>Edit</Button>
            {editing && ( <EditCar car={props.data} fetchData={fetchData} setEditing={setEditing} />)}
        </span>
    );
};
