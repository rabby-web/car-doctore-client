const ServicesCart = ({ services }) => {
  const { img, title } = services || {};
  console.log(services);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={img} alt="Shoes" className="rounded-xl h-56" />
        </figure>
        <div className="card-body text-left ">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCart;
