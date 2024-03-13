import React from 'react';
import { Button } from '@mui/material';

export default function DeleteCarCellRender(props) {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    const { fetchData } = props;

    const deleteCar = () => {
        console.log( props.data._links.car.href )
        fetch(props.data._links.car.href, { method: 'DELETE' })
            .then(res => {
                if (res.ok) {
                    alert('Car deleted');
                    fetchData();
                }
            })
            .catch(err => console.log.error(err));

    };

    return (
        <span>
            <span>{cellValue}</span>&nbsp;
            <Button onClick={() => deleteCar()}>Delete</Button>
        </span>
    );
};