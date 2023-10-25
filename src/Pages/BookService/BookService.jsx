import { useLoaderData } from "react-router-dom";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  return (
    <div>
      <h2>Checkout</h2>
      {title}
      {/*  */}
      <div>
        <div className="">
          <div className=" flex-col lg:flex-row-reverse ">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-5 md:p-10">
              <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className=" w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="date"
                      placeholder="date"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
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
                    name=""
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
