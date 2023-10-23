import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel h-[600px] w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-6  pl-8">
              <h1 className="text-xl md:text-6xl font-bold bg">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="px-4 py-2 m-1  text-white bg-[#FF3811] border border-[#FF3811]">
                Discover More
              </button>
              <button className="px-4 py-2 m-1 border text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-6  pl-8">
              <h1 className="text-xl md:text-6xl font-bold bg">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="px-4 py-2 m-1  text-white bg-[#FF3811] border border-[#FF3811]">
                Discover More
              </button>
              <button className="px-4 py-2 m-1 border text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-6  pl-8">
              <h1 className="text-xl md:text-6xl font-bold bg">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="px-4 py-2 m-1  text-white bg-[#FF3811] border border-[#FF3811]">
                Discover More
              </button>
              <button className="px-4 py-2 m-1 border text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full ">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 top-0 rounded-xl  bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
            <div className="text-white space-y-6  pl-8">
              <h1 className="text-xl md:text-6xl font-bold bg">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="px-4 py-2 m-1  text-white bg-[#FF3811] border border-[#FF3811]">
                Discover More
              </button>
              <button className="px-4 py-2 m-1 border text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
