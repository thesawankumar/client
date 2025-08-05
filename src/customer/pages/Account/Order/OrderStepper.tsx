import { CheckCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Order Placed",
    date: "Thu, 11 Jul",
    description: "Your order has been placed successfully",
    completed: true,
    value: "PLACED",
  },
  {
    title: "Packed",
    date: "Fri, 12 Jul",
    description: "Item packed in dispatch warehouse",
    completed: true,
    value: "PACKED",
  },
  {
    title: "Shipped",
    date: "Mon, 15 Jul",
    description: "Item shipped via courier",
    completed: true,
    value: "SHIPPED",
  },
  {
    title: "Arriving",
    date: "16 Jul - 18 Jul",
    description: "Item is on its way",
    completed: false,
    value: "ARRIVING",
  },
  {
    title: "Delivered",
    date: "18 Jul",
    description: "Order delivered to your address",
    completed: false,
    value: "DELIVERED",
  },
];

const cancelSteps = [
  {
    title: "Order Placed",
    date: "Thu, 11 Jul",
    description: "",
    completed: true,
    value: "PLACED",
  },
  {
    title: "Order Cancelled",
    date: "Sat, 13 Jul",
    description: "Your order has been cancelled successfully",
    completed: true,
    value: "CANCELLED",
  },
];

export default function OrderStepper({ orderStatus }: { orderStatus: string }) {
  const [activeSteps, setActiveSteps] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setActiveSteps(cancelSteps);
    } else {
      const updatedSteps = steps.map((step) => ({
        ...step,
        completed: isBeforeOrEqual(step.value, orderStatus),
      }));
      setActiveSteps(updatedSteps);
    }
  }, [orderStatus]);

  const isBeforeOrEqual = (stepValue: string, currentStatus: string) => {
    const order = ["PLACED", "PACKED", "SHIPPED", "ARRIVING", "DELIVERED"];
    return order.indexOf(stepValue) <= order.indexOf(currentStatus);
  };

  const activeIndex = activeSteps.findIndex((s) => s.value === orderStatus);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex flex-col gap-6">
        {activeSteps.map((step, index) => {
          const isActive = index === activeIndex;
          const isCompleted = step.completed;
          const isLast = index === activeSteps.length - 1;
          const isCancelled = step.value === "CANCELLED";

          return (
            <div key={step.value} className="relative flex items-start gap-4">
              {/* Vertical Line */}
              {!isLast && (
                <div className="absolute left-4 top-6 h-full border-l-2 border-gray-300"></div>
              )}

              {/* Icon */}
              <div className="z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-gray-300">
                {isCancelled ? (
                  <CheckCircle className="text-red-600 w-6 h-6" />
                ) : isCompleted ? (
                  <CheckCircle className="text-green-600 w-6 h-6" />
                ) : isActive ? (
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                )}
              </div>

              {/* Text Info */}
              <div className="ml-2">
                <h3
                  className={`font-semibold ${
                    isCancelled
                      ? "text-red-600"
                      : isActive
                      ? "text-blue-600"
                      : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>
                {step.date && (
                  <p className="text-sm text-gray-500">{step.date}</p>
                )}
                {step.description && (
                  <p
                    className={`text-sm ${
                      isCancelled ? "text-red-500" : "text-gray-600"
                    }`}
                  >
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
