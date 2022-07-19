import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./StepperModal.css";
import { TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  bgcolor: "background.paper",
  boxShadow: 24,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
};

export default function StepperModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [total, setTotal] = useState(0);
  const [sPattern, setSPattern] = useState(0);
  const [twoPattern, setTwoPattern] = useState(0);
  const [gatePattern, setGatePattern] = useState(0);

  const handleSinglePat = (e) => {
    if (e.target.value === "") {
      setSPattern(0);
    } else {
      setSPattern(parseInt(e.target.value));
    }
    console.log(parseInt(e.target.value));
  };
  const handleTwoPat = (e) => {
    if (e.target.value === "") {
      setTwoPattern(0);
    } else {
      setTwoPattern(parseInt(e.target.value));
    }
    console.log(parseInt(e.target.value));
  };
  const handleGatePat = (e) => {
    if (e.target.value === "") {
      setGatePattern(0);
    } else {
      setGatePattern(parseInt(e.target.value));
    }
    console.log(parseInt(e.target.value));
  };
  const handleAdd = () => {
    if (isNaN(gatePattern + sPattern + twoPattern)) {
      setTotal(0);
    } else {
      setTotal(gatePattern + sPattern + twoPattern);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>{props.label}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="big-container" sx={style}>
          <Box className="left-container">
            <Typography className="text" variant="h5">
              Quantity of Pattern Ordered
            </Typography>
            <Typography className="text" variant="h5">
              <TextField
                typeof="number"
                onChange={handleSinglePat}
                helperText=" "
                id="demo-helper-text-aligned"
                label="Single Piece Pattern"
              />
            </Typography>
            <Typography className="text" variant="h5">
              <TextField
                typeof="number"
                onChange={handleTwoPat}
                helperText=" "
                id="demo-helper-text-aligned"
                label="Two Piece"
              />
            </Typography>
            <Typography className="text" variant="h5">
              <TextField
                typeof="number"
                onChange={handleGatePat}
                helperText=" "
                id="demo-helper-text-aligned"
                label="Gate Pattern"
              />
            </Typography>
            <Typography className="text" variant="h5">
              <Button onClick={handleAdd}>Total</Button> {total}
            </Typography>
            <Button
              onClick={() => {
                props.handleSubmit();
                handleClose();
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
