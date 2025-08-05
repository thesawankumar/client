import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { useState } from "react";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";
import Step4 from "./Step/Step4";

// ✅ Proper array format
const steps = [
  "Tax & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

export default function SellerRegister() {
  const [activeStep, setActiveStep] = useState(0); // Stepper index starts from 0
  const handleCreateAccount = () => {
    console.log("Create Account");
  };
  return (
    <div className="space-y-2">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* You can conditionally render step forms based on `activeStep` */}
      <div>
        {activeStep === 0 && <Step1 />}
        {activeStep === 1 && <Step2 />}
        {activeStep === 2 && <Step3 />}
        {activeStep === 3 && <Step4 />}
      </div>

      {/* Navigation Buttons (Next / Back) */}
      <div className="flex cursor-pointer justify-between pt-4">
        <Button
          className="px-4 py-2 bg-gray-200 !rounded-lg"
          variant="outlined"
          onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          disabled={activeStep === 0}
        >
          Back
        </Button>
        <Button
          className="px-2 py-2 cursor-pointer bg-blue-600 text-white !rounded-lg"
          variant="outlined"
          onClick={() =>
            setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
        >
          {activeStep === steps.length - 1 ? "Create Account" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
