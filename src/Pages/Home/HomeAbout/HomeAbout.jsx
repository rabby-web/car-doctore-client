import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const HomeAbout = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-4 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#FF3811] mt-8 lg:mt-0">
              About Us
            </h2>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don{"'"}t look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don{"'"}t look even slightly
              believable.
            </p>
            <button className="bg-[#FF3811] text-xl font-semibold text-white py-3 px-6 rounded-lg">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
