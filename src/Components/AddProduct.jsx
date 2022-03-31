import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddProduct({ addItem }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const addInput = (e) => {
    e.preventDefault();
    addItem({ name, description, price });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="form_container">
      <Button variant="outlined" onClick={handleClickOpen}>
        Add product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product </DialogTitle>
        <form
          onSubmit={addInput}
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
              label="product name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              onChange={(e) => setDescription(e.target.value)}
              label="description"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              label="price"
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
                add product
              </Button>
            </DialogActions>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
