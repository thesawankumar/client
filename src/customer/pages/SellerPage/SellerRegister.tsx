import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { useState } from "react";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";
import Step4 from "./Step/Step4";

const steps = [
  "Tax & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

export default function SellerRegister() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-4">
      {/* Stepper */}
      <div className="overflow-x-auto">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Step Content */}
      <div>
        {activeStep === 0 && <Step1 />}
        {activeStep === 1 && <Step2 />}
        {activeStep === 2 && <Step3 />}
        {activeStep === 3 && <Step4 />}
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 pt-4">
        <Button
          className="!rounded-lg"
          variant="outlined"
          onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          disabled={activeStep === 0}
          fullWidth={true}
        >
          Back
        </Button>
        <Button
          className="!rounded-lg bg-blue-600 text-white"
          variant="contained"
          onClick={() =>
            setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          fullWidth={true}
        >
          {activeStep === steps.length - 1 ? "Create Account" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
