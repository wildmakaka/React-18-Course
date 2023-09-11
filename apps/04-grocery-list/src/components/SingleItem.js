export default function SingleItem({ item }) {
  return (
    <div className="item">
      <div>Item Name:</div>
      <div>{item.name}</div>
      <div>${item.quantity}</div>
    </div>
  );
}
