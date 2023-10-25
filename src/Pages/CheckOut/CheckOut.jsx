import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  return (
    <div>
      <h2>Checkout</h2>
      {title}
    </div>
  );
};

export default CheckOut;
