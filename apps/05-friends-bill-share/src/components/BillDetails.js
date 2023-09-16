export default function BillDetails({ friend }) {
  return (
    <div>
      <h3>Bill Details that should be given by {friend.name}</h3>

      <ul>
        {friend.billDetails.map((bill) => (
          <li key={bill.id}>
            You need to pay {bill.price} to {bill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
