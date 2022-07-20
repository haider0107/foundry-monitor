import * as React from "react";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProductStepper from "../../components/ProductStepper/ProductStepper";
import CompanyModal from "../../components/CompanyModal/CompanyModal";
import "./LiveTracking.css";

const data = [
  {
    code: "HIGHFI058",
    company: "HighFi Metacast",
    pattern: "Single Piece",
    moulding: "Double Piece",
    activeStep: 4,
    count: [600, 500, 450],
  },
];

export default function LiveTracking() {
  const searchRef = React.useRef("");
  const [showStepper, setStepper] = React.useState(false);
  const [stepperContent, setStepperContent] = React.useState(null);
  const [notFound, setNotFound] = React.useState(false);
  const searchData = (code) => {
    setStepperContent(
      data.map((d) => {
        if (d.code === code) {
          setStepper(true);
          return d;
        } else {
          setNotFound(true);
          setTimeout(() => {
            setNotFound(false);
          }, 3000);
          return 0;
        }
      })
    );
  };

  return (
    <>
      {notFound ? <div className="not-found">Record not found!</div> : null}
      <div className="live-tracking-container">
        <div className="input-items">
          <InputBase
            sx={{ ml: 3, flex: 1, minWidth: "70%" }}
            placeholder="Enter the product ID"
            inputProps={{ "aria-label": "enter the product id" }}
            inputRef={searchRef}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => searchData(searchRef.current.value)}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>

      {showStepper && stepperContent ? (
        <div className="stepper-container">
          <div className="company-modal">
            <CompanyModal
              name="Company Ashok Irons"
              companyID="AKI0023"
              contact="9856547845"
              location="Katki,Belgaum"
            />
          </div>
          <ProductStepper content={stepperContent} />
        </div>
      ) : null}
    </>
  );
}
