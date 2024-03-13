import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditCar({ car, fetchData, setEditing }) {
    //console.log(car)
    const [editedCar, setEditedCar] = useState(car)
    const [open, setOpen] = React.useState(true);


    const handleInputChange = (e) => {
        setEditedCar({ ...editedCar, [e.target.name]: e.target.value })
        //console.log(editedCar)
    }

    const handleClose = () => {
        setOpen(false)
        setEditing(false);
    };

    const saveEdit = () => {
        console.log('Edited Car:', editedCar);
        fetch(editedCar._links.car.href, { method: 'PUT', headers: { "Content-Type": "application/json" }, body: JSON.stringify(editedCar) })
            .then(res => {
                if (res.ok) {
                    alert('Car edited');
                    fetchData();
                    handleClose();
                }
            })
            .catch(err => console.log.error(err));

    }




    return (
        <>
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                        },
                    }}
                >
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            name="brand"
                            value={editedCar.brand}
                            onChange={e => handleInputChange(e)}
                            label="Brand"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            name="model"
                            value={editedCar.model}
                            onChange={e => handleInputChange(e)}
                            label="Model"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            name="color"
                            value={editedCar.color}
                            onChange={e => handleInputChange(e)}
                            label="Color"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            name="fuel"
                            value={editedCar.fuel}
                            onChange={e => handleInputChange(e)}
                            label="Fuel"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            name="modelYear"
                            value={editedCar.modelYear}
                            onChange={e => handleInputChange(e)}
                            label="Year"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            required
                            margin="dense"
                            name="price"
                            value={editedCar.price}
                            onChange={e => handleInputChange(e)}
                            label="Price"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={saveEdit} type="edit">Edit</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    );

}