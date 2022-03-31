import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./FormDialog.css";
export default function UpdateProduct({ updateId, product }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [picture, setPicture] = useState(product.picture);
  const [id, setId] = useState(product.id);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const updateProduct = (e) => {
    e.preventDefault();
    updateId({ id, picture, name, description, price });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="form_container">
      <button className="btn_update" onClick={handleClickOpen}>
        update
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>update Product </DialogTitle>
        <form
          onSubmit={updateProduct}
          style={{ display: "flex", flexDirection: "column", margin: "40px" }}
        >
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <div>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleClose}>
                update product
              </Button>
            </DialogActions>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
