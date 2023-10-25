import { Link } from "react-router-dom";
const ServicesCart = ({ services }) => {
  const { _id, img, title, price, description } = services || {};
  console.log(services);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img src={img} alt="Shoes" className="rounded-xl h-64 w-full" />
        </figure>
        <div className="card-body text-left ">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 140)}</p>
          <div className="card-actions text-[#FF3811]">
            <p className="text-2xl font-semibold">Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn bg-[#FF3811] text-white">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
