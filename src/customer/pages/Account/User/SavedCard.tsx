import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function SavedCard() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center  rounded-2xl shadow-inner">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
        <CreditCardIcon className="w-10 h-10 text-blue-600" />
      </div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        No Saved Cards
      </h2>
      <p className="text-sm text-gray-500 max-w-sm mb-6">
        You don’t have any saved cards yet. Add a card for quicker and smoother
        checkout next time.
      </p>
      <button className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-md transition">
        + Add New Card
      </button>
    </div>
  );
}
