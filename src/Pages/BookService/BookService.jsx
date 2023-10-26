import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  console.log(img);
  const { user } = useContext(AuthContext);

  const handelBookingService = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const date = from.date.value;
    const sms = from.sms.value;
    const email = user?.email;
    console.log(email);
    const order = {
      customerName: name,
      email,
      date,
      sms,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(order);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service Booking Successfully");
        }
      });
  };
  return (
    <div>
      <div>
        <div className="">
          <div className=" flex-col lg:flex-row-reverse ">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-5 md:p-10">
              <h2 className="text-center font-bold text-2xl text-[#FF3811]">
                Booking: {title}
              </h2>
              <form onSubmit={handelBookingService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className=" w-full">
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      placeholder="Name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="date"
                      name="date"
                      placeholder="date"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      defaultValue={user?.email}
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      defaultValue={"$" + price}
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  {/* <input
                      type="password"
                      placeholder="Your Email"
                      
                      required
                    /> */}
                  <textarea
                    className="border-2 rounded-md mt-3 input-bordered w-full"
                    placeholder="Your SMS"
                    name="sms"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#FF3811] text-white text-xl"
                    type="submit"
                    value="Order Confirm"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
