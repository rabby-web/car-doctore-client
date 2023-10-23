import login from "../../assets/images/login/login.svg";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse  gap-7">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-2xl font-bold text-center pt-3">Register</h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
                  Register
                </button>
              </div>
            </form>
            <h2 className="text-center">Or Sign In with</h2>
            <div className="flex text-center items-center justify-center text-[#FF3811] text-3xl font-semibold gap-3 p-3">
              <BsFacebook></BsFacebook>
              <AiFillGoogleCircle></AiFillGoogleCircle>
              <AiFillLinkedin></AiFillLinkedin>
            </div>
            <h2 className="text-center mb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-[#FF3811] font-semibold">
                Login
              </Link>
            </h2>
          </div>
          <div className="text-center">
            <img src={login} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
