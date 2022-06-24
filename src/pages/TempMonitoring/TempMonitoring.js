import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./TempMonitoring.css";
import { Typography } from "@mui/material";

function TempMonitoring() {
  //get current time and update every second
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setF1(Math.floor(Math.random() * (350 - 250 + 1)) + 250);
      setF2(Math.floor(Math.random() * (350 - 250 + 1)) + 250);
      setF3(Math.floor(Math.random() * (350 - 250 + 1)) + 250);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [f1, setF1] = useState(0);
  const [f2, setF2] = useState(0);
  const [f3, setF3] = useState(0);

  return (
    <div>
      <div className="title">
        <Typography variant="h2" textAlign="left">
          Live Monitoring of the Furnace Tempature
        </Typography>
      </div>
      <div className="main-container">
        <div className="table-container">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Furnace Code</TableCell>
                  <TableCell align="right">Time Period</TableCell>
                  <TableCell align="right">Temperature</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    001
                  </TableCell>
                  <TableCell align="right">{time}</TableCell>
                  <TableCell align="right">{f1}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    002
                  </TableCell>
                  <TableCell align="right">{time}</TableCell>
                  <TableCell align="right">{f2}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    003
                  </TableCell>
                  <TableCell align="right">{time}</TableCell>
                  <TableCell align="right">{f3}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="table-container">
          <img
            src="https://thumbs.dreamstime.com/b/industrial-thermometer-industrial-thermometer-temperature-index-production-102508784.jpg"
            alt="hello"
            width="50%"
          />
        </div>
      </div>
    </div>
  );
}

export default TempMonitoring;
