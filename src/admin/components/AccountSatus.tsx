import { AccountStatus } from "../../types/SellerTypes";



const statusOptions: { status: AccountStatus | "ALL"; title: string }[] = [
  { status: "ALL", title: "All" },
  { status: AccountStatus.ACTIVE, title: "Active" },
  { status: AccountStatus.PENDING_VERIFICATION, title: "Pending Verification" },
  { status: AccountStatus.SUSPENDED, title: "Suspended" },
  { status: AccountStatus.DEACTIVATED, title: "Deactivated" },
  { status: AccountStatus.BANNED, title: "Banned" },
  { status: AccountStatus.CLOSED, title: "Closed" },
];



type Props = {
  filterStatus: AccountStatus | "ALL";
  setFilterStatus: (status: AccountStatus | "ALL") => void;
};

export default function AccountStatusChange({ filterStatus, setFilterStatus }: Props) {
  return (
    <div className="space-y-3 mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
      <select
        className="border rounded-md w-56 p-2 text-sm"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value as AccountStatus | "ALL")}
      >
        {statusOptions.map((option) => (
          <option key={option.status} value={option.status}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
