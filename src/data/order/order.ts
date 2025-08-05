import shirt1 from "../../images/shirt.png";
import saree1 from "../../images/saree.png";
import saree2 from "../../images/saree.png";
import formal1 from "../../images/formal-shirt.png";
import skirt1 from "../../images/skirt.png";
import skirt2 from "../../images/skirt.png";



const dummyOrders = [
    {
        id: 1,
        status: "PENDING",
        expectedArrival: "Arriving soon",
        image: shirt1,
        title: "Pending Order",
        description: "This order is pending and will be processed soon.",
        size: "M",
    },
    {
        id: 2,
        status: "PLACED",
        expectedArrival: "Expected by Aug 10",
        image: formal1,
        title: "Placed Order",
        description: "Your order has been placed successfully.",
        size: "L",
    },
    {
        id: 3,
        status: "CONFIRMED",
        expectedArrival: "Expected by Aug 12",
        image: skirt1,
        title: "Confirmed Order",
        description: "Your order is confirmed and being prepared.",
        size: "S",
    },
    {
        id: 4,
        status: "SHIPPED",
        expectedArrival: "Expected by Aug 15",
        image: skirt2,
        title: "Shipped Order",
        description: "Your order is on the way.",
        size: "XL",
    },
    {
        id: 5,
        status: "DELIVERED",
        expectedArrival: "Delivered on Aug 03",
        image: saree1,
        title: "Delivered Order",
        description: "Your order has been delivered successfully.",
        size: "Free",
    },
    {
        id: 6,
        status: "CANCELLED",
        expectedArrival: "Cancelled",
        image: saree2,
        title: "Cancelled Order",
        description: "Your order was cancelled.",
        size: "L",
    },
];

export default dummyOrders;
