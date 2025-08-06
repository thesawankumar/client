import React, { useState } from "react";
import DealTable from "./DealTable";
import CategoryTable from "./CategoryTable";
import CreateDeal from "./CreateDeal";

export default function Deal() {
  const [activeTab, setActiveTab] = useState("deals");

  const tabs = [
    { key: "deals", label: "Deals" },
    { key: "categories", label: "Categories" },
    { key: "create", label: "Create Deal" },
  ];

  return (
    <div className="w-full px-6 py-4">
      <div className="relative w-max mx-auto border border-gray-200 rounded-full bg-white shadow-sm">
        <div className="flex relative">
          {/* Sliding background */}
          <div
            className="absolute top-0 left-0 h-full bg-blue-700 rounded-full transition-all duration-300"
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${
                tabs.findIndex((t) => t.key === activeTab) * 100
              }%)`,
            }}
          />
          {/* Buttons */}
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`z-10 cursor-pointer relative px-5 py-2 text-sm font-medium rounded-full transition duration-200 w-[120px]
              ${
                activeTab === tab.key
                  ? "text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {activeTab === "deals" && <DealTable />}
        {activeTab === "categories" && <CategoryTable />}
        {activeTab === "create" && <CreateDeal />}
      </div>
    </div>
  );
}
