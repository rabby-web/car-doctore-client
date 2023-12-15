import { useEffect } from "react";
import { useState } from "react";
import ServicesCart from "../ServiceCart/ServicesCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-orange-600">Services</h3>
          <h2 className="text-4xl font-bold">Our Service Area</h2>
          <p className="text-lg">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don{"'"}t look even
            slightly believable.{" "}
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
          {services.map((services) => (
            <ServicesCart key={services._id} services={services}></ServicesCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
