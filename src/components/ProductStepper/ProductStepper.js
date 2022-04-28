import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import "./ProductStepper.css";

const steps = [
  "Pattern",
  "Moulding",
  "Melting and Puring",
  "Fitting and Inspection",
  "Dispatch",
];

export default function ProductStepper(props) {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    setData(props.content[0]);
    console.log(props.content[0]);
  }, [props.content]);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {data ? (
          <Stepper activeStep={data.activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : null}
      </Box>
      {data ? (
        <div className="table-container">
          <table>
            <tr>
              <th>Company Name</th>
              <th>Pattern</th>
              <th>Moulding</th>
              <th>Piece Count after Each Step</th>
            </tr>
            <tr>
              <td>{data.company}</td>
              <td>{data.pattern}</td>
              <td>{data.moulding}</td>
              <td>
                {data.count
                  ? data.count.map((n, i) => {
                      return (
                        <p>
                          {steps[i]} : {n}
                        </p>
                      );
                    })
                  : null}
              </td>
            </tr>
          </table>
        </div>
      ) : null}
    </>
  );
}
