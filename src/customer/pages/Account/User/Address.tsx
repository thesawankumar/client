import UserAddressCard from "./UserAddressCard";

export default function Address() {
  return (
    <div className=" space-y-2">
      {[1, 1, 1, 1].map(() => (
        <UserAddressCard />
      ))}
    </div>
  );
}
