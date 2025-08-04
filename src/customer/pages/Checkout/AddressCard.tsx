
import { Radio } from "@mui/material";

export default function AddressCard() {
  return (
    <div className="border rounded-md p-4 flex items-start space-x-4">
      <Radio  /> 
      <div className="space-y-1 text-sm">
        <p className="font-semibold">Zosh</p>
        <p className="text-gray-700">
          Ambavadi Choke, Banglor, Banglor, Karnataka - 530058
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Mobile :</span> 9023379136
        </p>
      </div>
    </div>
  );
}
