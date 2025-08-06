import React, { useState } from "react";

// 👇 Account status options
const statusOptions = [
  {
    status: "ACTIVE",
    title: "Active",
    description: "The account is active and in good standing.",
  },
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "The account is awaiting verification.",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description: "The account has been temporarily suspended.",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "The account has been deactivated by the user.",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "The account is permanently banned.",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "The account has been closed permanently.",
  },
];

export default function AccountStatusChange() {
  const [accountStatus, setAccountStatus] = useState("ACTIVE");

  const handleChangeAccountStatus = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountStatus(e.target.value);
  };



  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Status
      </label>
      <select
        className="border rounded-md w-56 p-2 text-sm"
        name="status"
        value={accountStatus}
        onChange={handleChangeAccountStatus}
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
