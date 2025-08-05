import watchImage from "../../../../images/smartwatch.jpg"; // image ka path project ke hisab se sahi karo
import OrderStepper from "./OrderStepper";

export default function OrderDetails() {
  return (
    <div className="flex flex-col items-center text-center space-y-3 p-4">
      {/* Image */}
      <div className="w-36 h-36">
        <img
          src={watchImage}
          alt="Product"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">Virani Clothing</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm max-w-md">
        Cellecor RAY 1.43&quot; AMOLED Display | 700 NITS | AOD | BT-Calling |
        AI Voice | Split Screen Smartwatch (Black Strap, Free Size)
      </p>

      {/* Size */}
      <p className="text-black font-semibold">
        Size: <span className="font-bold">M</span>
      </p>

      {/* Write Review */}
      <button className="text-green-600 hover:underline font-medium text-sm">
        WRITE REVIEW
      </button>
      <section>
        <OrderStepper orderStatus="ARRIVING" />
      </section>
      <section className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-full font-semibold">
            📍
          </div>
        </div>
        <div className="space-y-1 text-left text-sm">
          <p className="text-base font-semibold text-gray-800">Sawan</p>
          <p className="text-gray-600">
            Ambavadi Choke, Banglor, Banglor, Karnataka - 530058
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Mobile:</span>{" "}
            9023379136
          </p>
        </div>
      </section>
      <section className="bg-white border border-gray-300 rounded-xl w-full p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">Total Item Price</h3>
          <span className="font-medium text-gray-800">₹749.00</span>
        </div>

        <p className="text-sm  text-green-600">
          You saved <span className="font-semibold">₹1650.00</span> on this item
        </p>

        <div className="flex items-center bg-green-50 text-green-800 p-2 px-3 rounded-md w-max text-sm font-medium">
          <span className="mr-2">💳</span>
          Pay On Delivery
        </div>

        <p className="text-sm text-gray-500">
          Sold by : <span className="text-gray-700">Raam Clothing</span>
        </p>

        <button className="w-full text-red-600 border border-red-300 rounded-md py-2 font-medium hover:bg-red-50 transition">
          CANCEL ORDER
        </button>
      </section>
    </div>
  );
}
